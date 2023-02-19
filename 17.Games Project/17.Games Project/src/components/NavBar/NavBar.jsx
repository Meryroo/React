import { NavLink } from "react-router-dom"

const NavBar = () => {
    return <nav>
<ul>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><NavLink to="/gallery">Gallery</NavLink></li>
    <li><NavLink to="/profile">Profile</NavLink></li>
    <li><NavLink to="/login">Log In</NavLink></li>
</ul>

    </nav>
}

export default NavBar;