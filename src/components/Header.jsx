import React, { useState } from 'react';
import {LOGO_URL} from "../utils/constants"
const Header = () => {

 const[btnnameReact,setbtnnameReact] = useState("Login")


  return (
    <div className="header">
      <div className="logo-container">
        <img
          src= {LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className='login' onClick = {()=>{ btnnameReact=== "Login"?setbtnnameReact("Logout"):setbtnnameReact("Login")}}>
            {btnnameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
