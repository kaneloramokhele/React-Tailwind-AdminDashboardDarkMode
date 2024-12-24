// src/components/Header.jsx
// rafce / rfce

import PropTypes from "prop-types"; // Import PropTypes for props validation
import { useState } from "react";

import {
  MdKeyboardDoubleArrowLeft,
  MdDarkMode, MdLightMode,
  MdSearch,
} from "react-icons/md";


import NavNotice from "./headernav/NavNotice";
import NavMessage from "./headernav/NavMessage";
import NavProfile from "./headernav/NavProfile";

function Header({ isExpanded, toggleSidebar }) {

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex items-center justify-between bg-[#040036] text-white h-14 px-4 shadow-md">

      {/* Left Section: Toggle Button and Search Bar */}
      <div className="flex items-center">
        {/* Sidebar Toggle */}
        <button onClick={toggleSidebar} className="flex items-center cursor-pointer">
          <MdKeyboardDoubleArrowLeft 
            className={`text-2xl cursor-pointer transform transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`} 
          />
        </button>

        {/* Search Bar */}
        <div className="relative w-full max-w-md ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-1 px-4 pr-10 rounded-md bg-[#1e195385] text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <MdSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      
      {/* Right Section: Theme Toggle, Notifications, Messages, Profile */}
      <div className="flex items-center gap-4">
          <button
          onClick={handleThemeToggle}
          className="text-2xl hover:text-blue-500 transition-colors">
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>

          <ul className="flex items-center gap-4">
            <NavNotice />
            <NavMessage />
            <NavProfile />
          </ul>
      </div>
    </header>
  );
}

// Add PropTypes validation for isExpanded and toggleSidebar
Header.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
