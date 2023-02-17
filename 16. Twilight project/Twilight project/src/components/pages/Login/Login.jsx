import { UserContext } from "../../context/contex";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const navigate= useNavigate()
const {user, setUser} = useContext(UserContext);
const inputText = useRef(null);

    return <main>
        <div className="login-container">
            <div className="login-box">
                <input type="text" ref={inputText} />
                <button onClick={() => {
                    localStorage.setItem("user", inputText.current.value)
                    setUser(inputText.current.value)
                    navigate("/Gallery")
                    console.log(user)
                }}>Log In</button>
            </div>
        </div>
    </main>
}

export default Login;