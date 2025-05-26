import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}>
            </img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart
                    {/* <img className="cart-logo" src="https://www.flaticon.com/free-icons/smart-cart"></img> */}
                </li>
            </ul>
        </div>
    </div>
);

export default Header;