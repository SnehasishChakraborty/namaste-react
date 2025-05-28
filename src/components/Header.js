import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}>
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="/about" style={{textDecoration:"none"}}>About Us</Link></li>
                    <li><Link to="/contact" style={{textDecoration:"none"}}>Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=>{"Login" === btnName ? setBtnName("Logout") : setBtnName("Login")}}>
                        {btnName}
                        </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;