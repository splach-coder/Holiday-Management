import React from "react";
import "../assets/styles/Header.css"; // Import CSS file
import { FaUserCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section - Logo & Greeting */}
      <div className="left-section">
        <h1 className="logo">DKM<span className="dot">•</span></h1>
      </div>

      {/* Right Section - Button & Profile */}
      <div className="right-section">
        <button className="new-request-btn">NEW REQUEST</button>
        <FaCalendar className="calendar-icon" />
        <FaUserCircle className="user-icon" />
      </div>
    </header>
  );
};

export default Header;
