import "./Profile.css"

import { UserContext } from "../../context";
import { useContext } from "react";

const Profile = () => {
const {user} = useContext(UserContext)
    
    return <main>
        <div className="profile">
<h2>Welcome {user}</h2>
</div>
    </main>
}

export default Profile;