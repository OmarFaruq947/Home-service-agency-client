import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../../images/logo.jpg";
import Ripples from "react-ripples";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {

  const [loggedInUser] = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg customize_navbar">
     
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div>
        <img src={logo} className="logo" alt="" />
        <img style={{width:'40px',borderRadius:'50%'}} src={loggedInUser.photoURL} alt=""/>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          {/* <li className="nav-item">
            <Link className="nav-link mr-1 Menu_text_color" to="/Home">Home</Link>
          </li>
          <li className="nav-item  bottom_border_with_hover">
            <Link className="nav-link mr-1 Menu_text_color" to="/">About us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-1 Menu_text_color" to="/">Project</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-1 Menu_text_color" to="/">Testimonial</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-1 Menu_text_color" to="/">Contact</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link mr-1 Menu_text_color "  to="/Admin">Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-1 Menu_text_color "  to="/Book">Services</Link>
          </li>

          

        </ul>
      </div>

      <Link to="/Login">
        <div
          style={{
            display: "inline-flex",
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <Ripples color={"yellow"}>
            <button type="button" className="btn_bg_color_about">
              Login
            </button>
          </Ripples>
        </div>
      </Link>

    </nav>
  );
};

export default Navbar;
