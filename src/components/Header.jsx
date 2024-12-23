// src/components/Header.jsx
// rafce / rfce

import { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

import { 
    MdKeyboardDoubleArrowLeft, 
    MdDarkMode, 
    MdLightMode, 
    MdSearch 
} from 'react-icons/md';

import NavNotice from './headernav/NavNotice';
import NavMessage from './headernav/NavMessage';
import NavProfile from './headernav/NavProfile';

function Header({ isExpanded, setIsExpanded }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <header className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 shadow-md">
        {/* Left Section: Toggle Button and Search Bar */}
        <div className="flex items-center gap-4">
            <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-2xl transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
            }`}
            >
            <MdKeyboardDoubleArrowLeft className="text-gray-300 hover:text-white" />
            </button>

            <div className="relative">
            <form
                action="#"
                method="POST"
                className="flex items-center bg-gray-700 rounded-md overflow-hidden"
            >
                <input
                type="text"
                name="search"
                placeholder="Search"
                className="bg-transparent px-4 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none"
                />
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700">
                <MdSearch />
                </button>
            </form>
            </div>
        </div>

        {/* Right Section: Theme Toggle, Notifications, Messages, Profile */}
        <div className="flex items-center gap-6">
            <button
            onClick={handleThemeToggle}
            className="text-2xl hover:text-blue-500 transition-colors"
            >
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

// Add PropTypes validation
Header.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};

export default Header;

