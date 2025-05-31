import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useNavigate } from "react-router";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const {loggedInUser ,setUser} = useContext(UserContext)
    // console.log(loggedInUser)
    const onlineStatus = useOnlineStatus()
    const navigate = useNavigate();
    return (
        <div className="flex justify-between bg-pink-100 m-2 shadow-lg">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL}>
                </img>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4 mx-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4 mx-4 hover:font-bold"><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
                    <li className="px-4 mx-4 hover:font-bold"><Link to="/about" style={{textDecoration:"none"}}>About Us</Link></li>
                    <li className="px-4 mx-4 hover:font-bold"><Link to="/contact" style={{textDecoration:"none"}}>Contact Us</Link></li>
                    <li className="px-4 mx-4 hover:font-bold"><Link to="/grocery" style={{textDecoration:"none"}}>Grocery</Link></li>
                    <li className="px-4 mx-4 hover:font-bold cursor-pointer">Cart</li>
                    <button className="px-4 mx-4 hover:font-bold cursor-pointer" 
                    onClick={()=>{
                        "Login" === btnName ? setBtnName("Logout") : setBtnName("Login")
                        if("Login" === btnName){
                            setUser("Snehasish Chakraborty")
                        }else{
                            navigate("/")
                            setUser("Guest")
                        }
                        ""
                        }}>
                        {btnName}
                        </button>
                        <li className="pr-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;