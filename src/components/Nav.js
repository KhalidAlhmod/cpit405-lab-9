import {Link} from 'react-router-dom';
const Nav = () => {
    return(
        <header>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
            </nav>


        </header>

    )


}

export default Nav;