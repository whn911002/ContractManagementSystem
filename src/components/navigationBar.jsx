import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: 20 }}
    >
      <span className="navbar-brand">Contract Management System</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link m-2" to="/contracts">
            Contracts Dashboard
          </NavLink>
          <NavLink className="nav-item nav-link m-2" to="/ratecharts">
            Cryptocurrency Rate
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
