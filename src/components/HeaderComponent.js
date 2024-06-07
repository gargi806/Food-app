import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState();
  const onlineStatus = useOnlineStatus();

  const { LoggedInUser } = useContext(UserContext);
  console.log(LoggedInUser);

  return (
    <div className="flex flex-col md:flex-row p-2 justify-between bg-green-200 shadow-xl align-middle rounded-md">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="logo-container">
          <Link to="/">
            <img className="w-22 h-20 m-2 rounded-t-3xl" src={LOGO_URL} />
          </Link>
        </div>
        <button
          className="md:hidden p-2 m-2 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      <div
        className={`flex-col md:flex-row md:flex ${
          menuOpen ? "flex" : "hidden md:flex"
        } items-center p-4 m-2`}
      >
        <ul className="flex flex-col md:flex-row text-slate-950 text-2xl font-normal ">
          <li className="p-2 m-2 md:p-2 lg:p-6 text-white text-xl">
            Online status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-2 m-2 md:p-4 lg:p-6 text-white text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2 md:p-4 lg:p-6 text-white text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-2 md:p-4 lg:p-6 text-white text-xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-2 md:p-4 lg:p-6 text-white text-xl">Cart</li>
          <li className="p-2 m-2 md:p-4 lg:p-6 text-white text-xl">
            <button
              className=" p-2 md:p-2 lg:p-2 text-lg bg-white text-green-500 rounded-md hover:bg-gray-200 transition duration-300"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="p-2 m-2 md:p-4 lg:p-6 text-white text-xl">
            {LoggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
