import React from "react";
import Cart from "./Cart";
import LoginModal from "../SignIn/LogInModal";
import SignUpModal from "../SignIn/SignUpModal";
import Profile from "./userProfile";
import { useSelector } from "react-redux";

const Navbar = () => {
 const signIn = useSelector(state => state.display.showSignIn ); 

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent text-dark p-0">
        <div className="container-fluid">
          <span className="navbar-brand fs-1 p-0">COZA STORE</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs-5" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark fs-5"
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  LogIn
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  href="/"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="fa-solid fa-cart-shopping fa-xl"></i>
                </a>
              </li>

              <li className="nav-item ms-auto">
                <a
                  className="nav-link text-dark"
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="fa-solid fa-user fa-xl"></i>
                </a>
              </li>
             <li className={`nav-item ms-auto mt-1 ${signIn ? "d-inline" : "d-none"}`} >
                <a
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#profileModal"
                >
                  <img src="./images/b1.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <LoginModal />
      <SignUpModal />
      <Cart />
      <Profile />
    </>
  );
};

export default Navbar;
