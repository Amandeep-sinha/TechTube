import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
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
            <Link to="home"><i className="fa fa-home" aria-hidden="true"></i></Link>
            </li>
            <li className="login">
            <Link to="history"><i className="fa fa-clock-o" aria-hidden="true"></i></Link>
            </li>
            
            <li className="login">
            <Link to="login"><i className="fa fa-user" aria-hidden="true"></i></Link>
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