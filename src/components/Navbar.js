import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="home-link">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

