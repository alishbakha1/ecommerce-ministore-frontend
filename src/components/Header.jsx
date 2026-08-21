import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
     localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar d-flex justify-content-between align-items-center px-4">
        <div className="topbar-left">
          <span className="me-3">
            <i className="fas fa-envelope me-2"></i>
            info@ministore.com
          </span>

          <span>
            <i className="fas fa-phone me-2"></i>
            +92 300 1234567
          </span>
        </div>

        <div className="topbar-right">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="#">
            <i className="fab fa-whatsapp"></i>
          </a>

          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar px-4">
        <Link className="navbar-brand text-white fw-bold" to="/">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Side */}
          <div className="nav-icons d-flex align-items-center">
            {/* Cart */}
            <Link
              to="/cart"
              className="position-relative text-white me-4"
            >
              <i className="fas fa-shopping-cart fs-5"></i>

              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {props.count}
              </span>
            </Link>

            {/* User */}
            {!user ? (
              <Link to="/login" className="text-white">
                <i className="fas fa-user fs-5"></i>
              </Link>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user me-2"></i>
                  Hello! {user.fullname}
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      <i className="fas fa-sign-out-alt me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;