// src/components/dashboard/Pagetitle.jsx
// rafce / rfce

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdDoorFront } from "react-icons/md";

function Pagetitle({ page }) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-semibold text-gray-900">{page}</h1>
      <nav className="mt-2">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800"
            >
              <MdDoorFront className="inline-block text-lg" />
            </Link>
          </li>
          <li className="before:content-['/'] before:mx-2 before:text-gray-400">
            <span className="text-gray-700">{page}</span>
          </li>
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



