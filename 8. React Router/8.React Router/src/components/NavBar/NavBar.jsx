import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () =>{
    return <nav className="navbar">
    
    <ul>
    <li>
        <NavLink to="/Home">Home</NavLink>
        </li>
    <li>
    <NavLink to="/Gallery">Gallery</NavLink>
    </li>
    <li>
        <NavLink to="About">About</NavLink>
    </li>
</ul>
</nav>
}

export default NavBar;