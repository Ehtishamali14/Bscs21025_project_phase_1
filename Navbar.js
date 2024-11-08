// Navbar.js
import React, { useState } from 'react';


const Navbar = () => {
  const [isProfileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isLanguagePopupVisible, setLanguagePopupVisible] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleAirbnbYourHomeClick = () => {
    window.open('/host', '_blank');
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const toggleLanguagePopup = () => {
    setLanguagePopupVisible(!isLanguagePopupVisible);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img 
          src="/img/logo.jpg" 
          alt="GBIN Logo" 
          className="navbar-logo" 
          onClick={handleLogoClick} 
        />
        <span className="navbar-item clickable">Stays</span>
        <span className="navbar-item clickable">Experiences</span>
      </div>
      <div className="navbar-right">
        <span 
          className="navbar-item clickable" 
          onClick={handleAirbnbYourHomeClick}
        >
          GBIN your home
        </span>
        <span 
          className="navbar-icon clickable" 
          onClick={toggleLanguagePopup}
        >
          🌐
        </span>
        <div className="navbar-profile clickable" onClick={toggleProfileDropdown}>
          <span className="navbar-menu-icon">≡</span>
          <span className="navbar-avatar">👤</span>
        </div>
        {isLanguagePopupVisible && (
          <div className="language-popup">
            <div className="popup-item">Language</div>
            <div className="popup-item">Currency</div>
          </div>
        )}
        {isProfileDropdownVisible && (
          <div className="profile-dropdown">
            <div className="dropdown-item">Sign up</div>
            <div className="dropdown-item">Log in</div>
            <hr />
            <div className="dropdown-item">Gift cards</div>
            <div className="dropdown-item">Airbnb your home</div>
            <div className="dropdown-item">Host an experience</div>
            <div className="dropdown-item">Help Center</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
