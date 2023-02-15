import "./NavBar.css"
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const NavBar = () => {
    const {user,logout} = useContext(UserContext)
return <nav className="navbar">
    <div>
    {user!== null && <button onClick={() =>logout()}>Log Out</button>}
    </div>
    <ul>
    <li>
        <NavLink to="/">Home</NavLink>
    </li>
    <li>
    {user!== null && <NavLink to="/Gallery">Gallery</NavLink>}
    
    </li>
    <li>
       {user == null &&<NavLink to="/Login">Login</NavLink> } 
    </li>
    </ul>
    
    
</nav>
  
}

export default NavBar;