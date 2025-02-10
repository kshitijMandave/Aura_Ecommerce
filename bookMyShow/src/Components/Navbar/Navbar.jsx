import React from "react";
import "./Navbar.css";
import BookMyShowLogo from "./Images/logo/BookMyShow.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="">
            <img src={BookMyShowLogo} alt="logo" />
          </a>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
        <div className="sel-city">
          <select name="city" id="">
            <option value="">Hydrabad</option>
          </select>
        </div>
        <div className="sign-in">
          <button>sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
