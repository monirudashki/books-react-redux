import { NavLink } from "react-router-dom";

export const Header = () => {

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="#/">Dashboard</a>
                    <div id="guest">
                        <NavLink to="/auth/login" className='button'>Login</NavLink>
                        <NavLink to="/auth/register" className='button'>Register</NavLink>
                    </div>

                    <div id="user">
                        <span>Welcome, Placeholder</span>
                        <a className="button" href="#/">My Books</a>
                        <a className="button" href="#/">Add Book</a>
                        <a className="button" href="#/">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    );
}