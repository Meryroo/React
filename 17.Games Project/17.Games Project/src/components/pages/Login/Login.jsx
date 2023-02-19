import "./Login.css"
import { UserContext } from "../../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";



const Login = () =>{
const {user, setUser} = useContext(UserContext);
const inputText = useRef()
const navigate = useNavigate();



    return <main>
<div className="login-container" >
    
    <div className="login">
    <div className="login-img1">
        <img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1676773898/slide-sm3dwbf-2_ots8j2.png" alt="Luigi image"/>
    </div>
    <span><input type="text" placeholder="Enter your name..." ref={inputText}/>
    <button onClick={() => {
    setUser(inputText.current.value)
    localStorage.setItem("user", inputText.current.value)
    navigate("/gallery")
}
    }>Log In</button>
    </span>
    <div className="login-img">
        <img src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1676773896/slide-sm3dwbf-3_u37hn0.png" alt="Mario image"/>
    </div>
    </div>
   
</div>

    </main>
}

export default Login;