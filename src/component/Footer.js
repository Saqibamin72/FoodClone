import { useContext } from "react";
import UserContext from "./utils/UserContext";


const Footer=()=>{
   const {user}=useContext(UserContext)
    return(
        <div>
        
        <h1 className="text-blue    -500 text-base mt-2">{user.email}</h1>
        </div>
    )
}
export default Footer;