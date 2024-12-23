// src/components/Sidebar.jsx
// rafce / rfce


import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { 
    MdMonetizationOn, 
    MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import { 
    BsSearch,
    BsExclamationTriangle, 
} from "react-icons/bs";

import { 
    mainLinks, 
    customersLinks, 
    productsLinks, 
    settingsLinks,  
} from "../constants/index.jsx";

// Helper function to truncate text
const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) : text;
};

export default function Sidebar({ isExpanded }) {
    const [openSubmenus, setOpenSubmenus] = useState({});

    const toggleSubmenu = (id) => {
        setOpenSubmenus((prevState) => {
            const newState = {};

            // Close all other submenus if the clicked one is not already open
            if (!prevState[id]) {
                newState[id] = true;
            }

            return newState;
        });
    };

    const renderLinks = (links) => (
        <ul>
            {links.map((link) => (
                <li key={link.id}>
                    <Link
                        to={link.href}
                        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md mt-1 ${
                            link.spacing ? "mb-0" : "mb-0"}`}>
                        <span className="text-2xl block">{link.icon ? link.icon : <BsExclamationTriangle />}</span>
                        <span
                            className={`text-base font-medium flex-1 ${
                                !isExpanded && "hidden"}`}>
                            {link.title}
                        </span>
                        {link.submenu && isExpanded && (
                            <MdOutlineArrowDropDownCircle
                                onClick={() => toggleSubmenu(link.id)}
                                className={`${openSubmenus[link.id] && "rotate-180"}`}/>
                        )}
                    </Link>
                    {link.submenu && openSubmenus[link.id] && isExpanded && (
                        <ul>
                            {link.submenuItems.map((submenuItem) => (
                                <li key={submenuItem.id}>
                                    <Link
                                        to={submenuItem.href}
                                        className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-1 px-5 hover:bg-slate-500 rounded-md mt-1">
                                        {submenuItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div
            className={`bg-gray-800 h-screen fixed p-5 pt-5 text-white transition-all duration-300 ${
                isExpanded ? "w-72" : "w-20"}`}>
            <div className="inline-flex">
                <Link
                    to="/"
                    className={`flex items-center justify-center hover:text-blue-800 duration-300 ${
                        isExpanded && "rotate-[360deg]" ? "justify-start" : "justify-center"}`}>
                    <MdMonetizationOn className="text-4xl" />
                    {isExpanded && <span className="ml-2 text-lg font-semibold">Brand Name</span>}
                </Link>
            </div>

            <div
                className={`flex items-center rounded-md bg-slate-500 mt-4 ${
                    !isExpanded ? "px-1.5" : "px-1.5"} py-2`}>
                <BsSearch
                    className={`text-white text-lg block float-left cursor-pointer ${
                        isExpanded && "mr-2"
                    }`}/>

                <input
                    type="search"
                    placeholder="Search"
                    className={`text-base bg-transparent text-white outline-none focus:outline-none ${
                        !isExpanded && "hidden"
                    }`}
                />
            </div>

            <nav className="mt-8">
                <div>
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Main", isExpanded ? 100 : 4)}
                    </h2>
                    {renderLinks(mainLinks)}
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Customers", isExpanded ? 100 : 4)}
                    </h2>
                    {renderLinks(customersLinks)}
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Products", isExpanded ? 100 : 4)}
                    </h2>
                    {renderLinks(productsLinks)}
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Settings", isExpanded ? 100 : 4)}
                    </h2>
                    {renderLinks(settingsLinks)}
                </div>
            </nav>
        </div>
    );
}

Sidebar.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
};

