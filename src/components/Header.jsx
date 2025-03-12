import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnnameReact, setBtnnameReact] = useState("Login");

  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO_URL} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            {/* Login/Logout Button */}
            <button
              className="login"
              onClick={() =>
                setBtnnameReact(btnnameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnnameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
