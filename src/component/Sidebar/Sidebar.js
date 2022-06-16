import "./Sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="sidebar-container trans-off">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-home" aria-hidden="true"></i>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-play-circle" aria-hidden="true"></i>Playlist
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-heart" aria-hidden="true"></i>Liked
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-clock-o" aria-hidden="true"></i>Watch Later
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) =>
              isActive ? "sidebar-option active" : "sidebar-option"
            }
          >
            <i className="fa fa-history" aria-hidden="true"></i>History
          </NavLink>
        </li>
      </ul>
    </div>
  );
}