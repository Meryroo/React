import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../context"
import { useContext } from "react"


const NavBar = () => {
    const navigate = useNavigate();
    const {user, logout} = useContext(UserContext);
    return <nav>
<ul>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><NavLink to="/gallery">Gallery</NavLink></li>
    <li><NavLink to="/profile">Profile</NavLink></li>
    {!user && <li><NavLink to="/login">Log In</NavLink></li>}
    {user && <button onClick={() => {
     logout()
     navigate("/home")
    }
   
        }>Log Out</button>}
</ul>

    </nav>
}

export default NavBar;