import { Link, NavLink } from "react-router-dom";

import { useSelector } from 'react-redux';

export const Header = () => {

    const currentUser = useSelector((state) => state.user.value);

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <NavLink to="/">Dashboard</NavLink>

                    {!currentUser
                        ?
                        <div id="guest">
                            <NavLink to="/auth/login" className='button'>Login</NavLink>
                            <NavLink to="/auth/register" className='button'>Register</NavLink>
                        </div>
                        :
                        <div id="user">
                            <span>Welcome, {currentUser.email}</span>
                            <NavLink className="button" to={`/myBooks/${currentUser._id}`}>My Books</NavLink>
                            <NavLink className="button" to="/createBook">Add Book</NavLink>
                            <Link className="button" to='/auth/logout'>Logout</Link>
                        </div>
                    }

                </section>
            </nav>
        </header>
    );
}