// src/components/Pagetitle.jsx
// rafce / rfce


import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdDoorFront } from "react-icons/md";

import '../styles/components/pagetitle.css'

function Pagetitle({ page }) {
  return (
    <div className='pagetitle'>
      <h1>{page}</h1>
      <nav>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <Link to='/'>
                    <MdDoorFront />
                </Link>
            </li>
            <li className='breadcrumb-item active'>{page}</li>
        </ol>
      </nav>
    </div>
  );
}

// Add PropTypes validation
Pagetitle.propTypes = {
  page: PropTypes.string.isRequired, // Ensure 'page' is a required string
};

export default Pagetitle;




