import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);
  console.log(LoggedInUser);

  return (
    <div className="flex p-2 m-2 justify-between bg-green-300 shadow-xl align-middle rounded-md">
      <div className="logo-container">
        <Link to="/">
          <img className="w-24 h-20 m-2" src={LOGO_URL} />
        </Link>
      </div>
      <div className=" p-4 m-2">
        <ul className="flex text-white text-lg font-normal">
          <li className="p-2 m-2">
            Online status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-2">Cart</li>
          <button
            className="p-2 m-2 "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-2 m-2">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
