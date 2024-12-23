// src/components/Sidebar.jsx
// rafce / rfce

import { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import {  
  MdArrowDropDown,
  MdWarning,
  MdLink,
} from "react-icons/md";


import { 
  mainList, 
  customersList, 
  productsList, 
  settingList 
} from '../constants/index';

import '../styles/components/sidebar.css';


// Helper function to truncate text
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) : text;
};

export default function Sidebar({ isExpanded }) {

  // const [isExpanded, setIsExpanded] = useState(true);
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

  return (
    <aside id='sidebar' className='sidebar'>
      <ul id='sidebar-nav' className="sidebar-nav">

        <h2 className="nav-heading">
          {truncateText("Main", !isExpanded ? 100 : 4)}
        </h2> 
        {mainList.map((main) => (        
          <li key={main.id} className='nav-item'>
              <Link
                to={main.href}
                className={`nav-link collapsed`}
                data-bs-toggle="collapse"
                >

                <span className="icon">{main.icon ? main.icon : <MdWarning />}</span>
                <span className={`${!isExpanded && "hidden"}`}>
                    {main.title}
                </span>

                {main.submenu && (
                    <MdArrowDropDown
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubmenu(main.id);
                        }}
                        className={`drop-icon ms-auto ${openSubmenus[main.id] ? "" : "collapsed"}`}
                    />
                )}
              </Link>

              {main.submenu && openSubmenus[main.id] && !isExpanded && (
                  <ul>
                      {main.submenuItems.map((submenuItem) => (
                          <li 
                            key={submenuItem.id}
                            className={`nav-item ${main.spacing ? "mb-90" : "mb-20"} `}>
                              <Link
                                  to={submenuItem.href}
                                  className="nav-link"
                              >
                                  <MdLink className='icon' />
                                  {submenuItem.title}
                              </Link>
                          </li>
                      ))}
                  </ul>
              )}
          </li>
        ))}

        <h2 className="nav-heading">
          {truncateText("Customers", !isExpanded ? 100 : 4)}
        </h2>
        {customersList.map((customer) => (        
          <li key={customer.id} className={`nav-item`}>
              <Link
                  to={customer.href}
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  >
                  <span className="icon">{customer.icon ? customer.icon : <MdWarning />}</span>
                  <span className={`${ !isExpanded && "hidden"}`}>
                      {customer.title}
                  </span>
                  
                  {customer.submenu && (
                    <MdArrowDropDown
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubmenu(customer.id);
                        }}
                        className={`drop-icon ms-auto ${openSubmenus[customer.id] ? "" : "collapsed"}`}
                    />
                )}
              </Link>
              {customer.submenu && openSubmenus[customer.id] && !isExpanded && (
                <ul>
                    {customer.submenuItems.map((submenuItem) => (
                        <li 
                          key={submenuItem.id}
                          className={`nav-item ${customer.spacing ? "mb-90" : "mb-20"} `}>
                            <Link
                                to={submenuItem.href}
                                className="nav-link"
                            >
                                <MdLink className='icon' />
                                {submenuItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
              )}
          </li>
        ))}

        <h2 className="nav-heading">
          {truncateText("Products", !isExpanded ? 100 : 4)}
        </h2>
        {productsList.map((product) => (        
          <li key={product.id} className={`nav-item`}>
              <Link
                  to={product.href}
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  >
                  <span className="icon">{product.icon ? product.icon : <MdWarning />}</span>
                  <span className={`${ !isExpanded && "hidden"}`}>
                      {product.title}
                  </span>
                  
                  {product.submenu && (
                    <MdArrowDropDown
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubmenu(product.id);
                        }}
                        className={`drop-icon ms-auto ${openSubmenus[product.id] ? "" : "collapsed"}`}
                    />
                )}
              </Link>
              {product.submenu && openSubmenus[product.id] && !isExpanded && (
                <ul>
                    {product.submenuItems.map((submenuItem) => (
                        <li 
                          key={submenuItem.id}
                          className={`nav-item ${product.spacing ? "mb-90" : "mb-20"} `}>
                            <Link
                                to={submenuItem.href}
                                className="nav-link"
                            >
                                <MdLink className='icon' />
                                {submenuItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
              )}
          </li>
        ))}


        <h2 className="nav-heading">
          {truncateText("Settings", !isExpanded ? 100 : 4)}
        </h2>
        {settingList.map(setting =>(
          <li 
            key={setting.id} 
            className={`nav-item ${setting.spacing ? "mb-90" : "mb-20"} `}>
            
            <Link
              to={setting.href}
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              >

              <span className="icon">{setting.icon ? setting.icon : <MdWarning />}</span>
              <span>{setting.title}</span>
            </Link>
          </li>
        ))}

      </ul>
    </aside>
  );
}

// Add PropTypes validation for isExpanded
Sidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

