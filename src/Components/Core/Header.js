import { Link, NavLink } from "react-router-dom";

import { useSelector } from 'react-redux';

export const Header = () => {

    const currentUser = useSelector((state) => state.user.value);

    console.log(currentUser);

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="#/">Dashboard</a>

                    {!currentUser
                        ?
                        <div id="guest">
                            <NavLink to="/auth/login" className='button'>Login</NavLink>
                            <NavLink to="/auth/register" className='button'>Register</NavLink>
                        </div>
                        :
                        <div id="user">
                            <span>Welcome, {currentUser.email}</span>
                            <a className="button" href="#/">My Books</a>
                            <a className="button" href="#/">Add Book</a>
                            <Link className="button" to='/auth/logout'>Logout</Link>
                        </div>
                    }

                </section>
            </nav>
        </header>
    );
}