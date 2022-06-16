import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
export function Navbar() {
  return (
    <div className="nav-header">
      <ul className="navbar">
        <div className="navbar-main ">
          <div className="navbar-left">
            <img className="logo" src={logo} />
            <h2> TechTube</h2>
          </div>
          <div className="search-container">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              name="search"
              className="search-bar"
              placeholder="Search video"
              id=""
            />
          </div>
          <ul className="navbar-right">
            
            <li className="login">
              <i className="fa fa-home" aria-hidden="true"></i>
            </li>
            <li className="login">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
            </li>
            
            <li className="login">
              <i className="fa fa-user" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
        <div className="search-container search-mob">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            name="search"
            className="search-bar"
            placeholder="Search product"
            id=""
          />
        </div>
      </ul>
    </div>
  );
}