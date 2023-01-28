import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Assistant from  "../Assistant/Assistant";
import ImageGenerator from "../ImageGenerator/ImageGenerator";
import "./Header.css";
import Home from "../Home/Home";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <>
      <nav className="text-center" >
        <div className="logo ">
          <Link to="/" className="brandon">
            <span className="textClip">D</span>ALLE &&nbsp;
            <span className="textClip">D</span>AVINCI
          </Link>
        </div>
        <div className="links">
          <NavLink to="/" path={<Home />}>
            Home
          </NavLink>
          <NavLink to="/assistant" path={<Assistant />}>
            Chat Assistant
          </NavLink>
          <NavLink to="/imageGenerator" path={<ImageGenerator />}>
            Image Generator
          </NavLink>
        </div>
        {/* ---------------Burger------------- */}
        <div
          className="burger shadow-out text-center "
          onClick={toggle}
        >
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
      <div
        className={`links_mobile shadow-out mx-5 ${
          isOpen ? "d-block" : "d-none"
        }`}
      >
        <NavLink onClick={() => setIsOpen(false)} to="/" path={<Home />}>
          Home
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} to="/assistant" path={<Assistant />}>
          Chat Assistant
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} to="/imageGenerator" path={<ImageGenerator />}>
          Image Generator
        </NavLink>
      </div>
    </>
  );
};

export default Header;
