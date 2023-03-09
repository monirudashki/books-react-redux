export const Register = () => {

    // const navigateTo = useNavigate();

    const dispatch = useDispatch();

    const [error, setError] = useState('');

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
        } catch (err) {
            console.log(err); // TODO redux global state for errors
        }
    }

    return (
        <section id="register-page" className="register">
            <form id="register-form">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label for="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label for="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}