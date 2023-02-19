import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context";
import Login from "./pages/Login/Login";

const ProtectecRoute = ({children}) => {
   const {user} = useContext(UserContext)
   
    if (!user){ 
        return <Navigate to="/login"/>
    }
    else {
        return children;
    }
}
export default ProtectecRoute;