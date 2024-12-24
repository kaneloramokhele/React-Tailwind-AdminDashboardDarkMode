// src/components/CardFilter.jsx
// rafce / rfce

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

import { MdFilterList } from "react-icons/md";

function CardFilter({ filterChange }) {
  return (
    <div className="filter">
        <Link 
            to="/filter" 
            className="icon"
            data-bs-toggle="dropdown">
                <MdFilterList />
        </Link>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className='dropdown-header text-start'>
                <h6>Filter</h6>
            </li>
            <li>
                <Link 
                    onClick={() => filterChange('All')}
                    className="dropdown-item">
                    All
                </Link>
            </li>
            <li>
                <Link 
                    onClick={() => filterChange('Today')}
                    className="dropdown-item">
                    Today
                </Link>
            </li>
            <li>
                <Link 
                    onClick={() => filterChange('This Month')}
                    className="dropdown-item">
                    This Month
                </Link>
            </li>
            <li>
                <Link 
                    onClick={() => filterChange('This Year')}
                    className="dropdown-item">
                    This Year
                </Link>
            </li>
        </ul>
    </div>
  );
}

// Add PropTypes validation
CardFilter.propTypes = {
  filterChange: PropTypes.func.isRequired, // Ensure filterChange is a required function
};

export default CardFilter
