import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Vidly
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div className="nav-item">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/customers">
              Customer
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
