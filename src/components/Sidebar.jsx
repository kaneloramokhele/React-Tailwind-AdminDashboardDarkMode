// src/components/Sidebar.jsx
// rafce / rfce


import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { 
    MdMonetizationOn, 
    MdOutlineArrowDropDownCircle,
    MdLink,
    MdWarningAmber,
} from "react-icons/md";


import { 
    mainList, 
    customersList, 
    productsList, 
    settingsList,  
} from "../constants/index.jsx";

// Helper function to truncate text
// const truncateText = (text, maxLength) => {
//     return text.length > maxLength ? text.slice(0, maxLength) : text;
// };

// Helper function to truncate text
const truncateText = (text, isExpanded, maxLength) => {
  if (isExpanded) return text;
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export default function Sidebar({ isExpanded }) {
    const [openSubmenus, setOpenSubmenus] = useState({});

    // const toggleSubmenu = (id) => {
    //     setOpenSubmenus((prevState) => {
    //         const newState = {};

    //         if (!prevState[id]) {
    //             newState[id] = true;
    //         }

    //         return newState;
    //     });
    // };

    const toggleSubmenu = (id) => {
        setOpenSubmenus((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
        }));
    };

    const renderLinks = (links) => (
        <ul>
            {links.map((link) => (
                <li key={link.id}>
                    <Link
                        to={link.href}
                        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-500 rounded-md mt-1 ${
                            link.spacing ? "mb-0" : "mb-0"
                        }`}>
                        <span className="text-2xl block">{link.icon ? link.icon : <MdWarningAmber />}</span>
                        <span
                            className={`text-base font-medium flex-1 ${
                                !isExpanded && "hidden"
                            }`}>
                            {truncateText(link.title, isExpanded, 6)}
                        </span>
                        {link.submenu && isExpanded && (
                            <MdOutlineArrowDropDownCircle
                                onClick={() => toggleSubmenu(link.id)}
                                className={`text-xl ${openSubmenus[link.id] && "rotate-180"}`}/>
                        )}
                    </Link>
                    {link.submenu && openSubmenus[link.id] && isExpanded && (
                        <ul>
                            {link.submenuItems.map((submenuItem) => (
                                <li key={submenuItem.id}>
                                    <Link
                                        to={submenuItem.href}
                                        className="text-[#fff] text-sm flex items-center gap-x-4 cursor-pointer p-1 px-5 hover:bg-slate-500 rounded-md mt-1">
                                        <MdLink />
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
            className={`bg-[#080824] h-screen fixed p-5 pt-5 text-white transition-all duration-300 ${
                isExpanded ? "w-72" : "w-20"
            }`}
        >
            <div className="inline-flex">
                <Link
                    to="/"
                    className={`flex items-center justify-center hover:text-blue-800 duration-300 ${
                        isExpanded && "rotate-[360deg]" ? "justify-start" : "justify-center"
                    }`}
                >
                    <MdMonetizationOn className="text-4xl" />
                    {isExpanded && <span className="ml-2 text-lg font-semibold">Brand Name</span>}
                </Link>
            </div>

            <nav className="mt-8">
                <div>
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Main", isExpanded, 4)}
                    </h2>
                    {renderLinks(mainList)}
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Customers", isExpanded, 4)}
                    </h2>
                    {renderLinks(customersList)}
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Products", isExpanded, 4)}
                    </h2>
                    {renderLinks(productsList)}
                </div>

                <div className="mt-4">
                    <h2 className="text-lg font-bold text-gray-600">
                        {truncateText("Settings", isExpanded, 4)}
                    </h2>
                    {renderLinks(settingsList)}
                </div>
            </nav>
        </div>
    );
}

Sidebar.propTypes = {
    isExpanded: PropTypes.bool.isRequired,
};

