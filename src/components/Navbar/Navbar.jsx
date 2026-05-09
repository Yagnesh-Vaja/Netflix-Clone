import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={navRef} className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Netflix" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New &amp; Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} className="icons" alt="Search" />
          <p>Children</p>
          <img src={bell_icon} className="icons" alt="Notifications" />
          <div className="navbar-profile">
            <img src={profile_img} alt="Profile" className="profile" />
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p onClick={() => logout()}>Sign Out of Netflix</p>
            </div>
          </div>
          <div
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>Home</li>
        <li onClick={() => setMenuOpen(false)}>TV Shows</li>
        <li onClick={() => setMenuOpen(false)}>Movies</li>
        <li onClick={() => setMenuOpen(false)}>New &amp; Popular</li>
        <li onClick={() => setMenuOpen(false)}>My List</li>
        <li onClick={() => setMenuOpen(false)}>Browse by Language</li>
      </ul>
    </>
  );
};

export default Navbar;
