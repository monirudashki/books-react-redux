import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setErrorMessage } from "../../Features/errorState/error";
import { loginUser } from "../../Features/userState/user";
import { register } from "../../Services/api";
import { passwordsMatch } from "./validators/validators";
import { Error } from "../Shared/Error";

export const Register = () => {

    const navigateTo = useNavigate();

    const dispatch = useDispatch();
    const errorMessage = useSelector((state) => state.error.value.message);

    const [errors, setErrors] = useState({});

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        rePass: ''
    });

    const onChangeValueHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const invalidForm = Object.values(formValues).some(x => x === '') || Object.values(errors).some(x => x)

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            email: formValues.email,
            password: formValues.password
        }

        try {
            const result = await register(userData.email, userData.password);
            dispatch(loginUser(result));
            navigateTo('/');
        } catch (err) {
            dispatch(setErrorMessage(err.message));
        }
    }

    return (
        <>

            {errorMessage !== "" &&
                <Error />
            }

            <section id="register-page" className="register">
                <form id="register-form" onSubmit={onSubmitHandler}>
                    <fieldset>
                        <legend>Register Form</legend>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" id="email" placeholder="Email"
                                    value={formValues.email}
                                    onChange={onChangeValueHandler}
                                />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input type="password" name="password" id="password" placeholder="Password"
                                    value={formValues.password}
                                    onChange={onChangeValueHandler}
                                />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="rePass">Repeat Password</label>
                            <span className="input">
                                <input type="password" name="rePass" id="rePass" placeholder="Repeat Password"
                                    value={formValues.rePass} onChange={onChangeValueHandler} onBlur={(e) => passwordsMatch(e, setErrors, formValues)} />
                            </span>
                        </p>
                        {errors.rePass &&
                            <p style={{ color: 'red', textAlign: 'center' }}>Passwords don't match!</p>
                        }
                        <input disabled={invalidForm} className="button submit" type="submit" value="Register" />
                    </fieldset>
                </form>
            </section>

        </>
    );
}