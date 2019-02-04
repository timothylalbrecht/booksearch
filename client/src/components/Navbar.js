import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <i class="fas fa-book" />
        Google Book Search
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${ window.location.pathname === "/" ? "text-white" : "" }`} to="/">
            Book Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${ window.location.pathname === "/saved" ? "text-white" : "" }`} to="/saved">
            Saved Books
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
