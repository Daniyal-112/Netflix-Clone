import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Search_icon from "../../assets/search_icon.svg";
import Bell_icon from "../../assets/bell_icon.svg";
import Profile_icon from "../../assets/profile_img.png";
import Dropdown_icon from "../../assets/caret_icon.svg";
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY >= 100) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Search_icon} alt="Search Icon" className="icons" />
        <p>Children</p>
        <img src={Bell_icon} alt="Bell Icon" className="icons" />
        <div className="navbar-profile">
          <img src={Profile_icon} alt="Profile icon" className="profile" />
          <img src={Dropdown_icon} alt="Dropdown Icon" />
          <div className="dropdown">
            <p>Sign Out of Netflix </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
