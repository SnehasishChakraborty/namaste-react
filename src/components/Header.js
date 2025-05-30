import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus()
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
                    onClick={()=>{"Login" === btnName ? setBtnName("Logout") : setBtnName("Login")}}>
                        {btnName}
                        </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;