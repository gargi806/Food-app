import {LOGO_URL} from "../utils/constants.js";
import {useState} from "react";
import {Link} from "react-router-dom";
const HeaderComponent=() =>{ 
  const [btnName,setBtnName] = useState("Login");

 return(
    <div className="head">
        <div className="logo-container">
            <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
            
        </div>
        <div className="nav-items">
            <ul>
                <li>
                   <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About Us</Link>
                    </li>
                <li>
                <Link to = "/contact">Contact Us</Link> 
                </li>
                <li>Cart</li>
                <button className="btn"
                 onClick={() => {
                    btnName === "Login" 
                    ? setBtnName("Logout") 
                    : setBtnName("Login");
                 }}
                
                >
                
                  {btnName}
                </button>
                


            </ul>

        </div>

    </div>
)
 };

export default HeaderComponent;