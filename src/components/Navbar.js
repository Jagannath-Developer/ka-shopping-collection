import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-md bg-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            KA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-primary">
                <span className="bi bi-box-arrow-in-right me-1"></span> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-danger mx-3">
                <span className="bi bi-person-plus-fill me-1"></span> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-warning">
                <span className="bi bi-cart2 me-1"></span> Cart (0){" "}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
