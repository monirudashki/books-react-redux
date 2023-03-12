import { useState } from "react";
import { login } from "../../Services/data";
import { Error } from '../Shared/Error'

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../Features/userState/user';
import { useLocation, useNavigate } from "react-router-dom";
import { setErrorMessage } from "../../Features/errorState/error";

export const Login = () => {

    const navigateTo = useNavigate();
    const location = useLocation();
    console.log(location?.state);

    const dispatch = useDispatch();
    const errorMessage = useSelector((state) => state.error.value.message);

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const onChangeValueHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            email: formValues.email,
            password: formValues.password
        }

        try {
            const result = await login(userData.email, userData.password);
            dispatch(loginUser(result));
            if (location.state && !location.state.previousPath.includes('logout')) {
                navigateTo(location.state.previousPath);
            } else {
                navigateTo('/');
            }
        } catch (err) {
            dispatch(setErrorMessage(err.message));
        }
    }

    return (
        <>
            {errorMessage !== "" &&
                <Error />
            }
            <section id="login-page" className="login">
                <form id="login-form" onSubmit={onSubmitHandler}>
                    <fieldset>
                        <legend>Login Form</legend>
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
                        <input className="button submit" type="submit" value="Login" />
                    </fieldset>
                </form>
            </section>
        </>

    );
}