import { UserContext } from "../../context/userContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const Login = () => {
   const {user, setUser} = useContext(UserContext)
   const inputText = useRef(null)
   const navigate = useNavigate();

    return (<main>
        <div className="login-container">
            <div className="login">
      <input type="text" ref={inputText} defaultValue={user} placeholder="Enter your name..."/>
      <button onClick={() => {
        setUser(inputText.current.value);
        localStorage.setItem("user", inputText.current.value)
        navigate("/Gallery")
      }}>Log in</button>
      </div>
      </div>
    </main>)
    
}

export default Login;