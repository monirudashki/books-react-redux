export const Header = () => {

    // const setActiveStyle = ({ isActive }) => {
    //     return isActive
    //         ? styles['active']
    //         : 'none'
    // }

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="#/">Dashboard</a>
                    <div id="guest">
                        <a className="button" href="#/">Login</a>
                        <a className="button" href="#/">Register</a>
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