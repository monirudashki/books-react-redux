export const Login = () => {
    return (
        <section id="login-page" class="login">
            <form id="login-form">
                <fieldset>
                    <legend>Login Form</legend>
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
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}