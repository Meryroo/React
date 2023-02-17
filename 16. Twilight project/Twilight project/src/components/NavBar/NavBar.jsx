import { NavLink } from "react-router-dom";

import "./NavBar.css"
const NavBar = () => {
  return (
    <nav className="navbar">
        <img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1676488801/The_Twilight_Saga_Collection-logo2_hbtdxi.png" alt="Twilight Logo"/>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Log In</NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
