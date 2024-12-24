// src/components/CardFilter.jsx
// rafce / rfce

import { Link } from 'react-router-dom';

import { GoKebabHorizontal } from "react-icons/go";

function CardFilter({ filterChange }) {
  return (
    <div className="filter">
        <Link 
            to="/filter" 
            className="icon"
            data-bs-toggle="dropdown">
                <GoKebabHorizontal />
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

export default CardFilter
