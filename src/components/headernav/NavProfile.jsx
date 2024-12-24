// src/components/headernav/NavProfile.jsx
// rafce / rfce

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MdWarningAmber, MdLogout } from "react-icons/md";
import { profileList } from '../../constants/index';

function NavProfile({ isOpen, onToggle }) {
  return (
    <li className="relative">
      <Link 
        to="#"
        className="flex items-center space-x-2"
        onClick={onToggle}>
        <img 
          src="/profile.png" 
          alt="profile_image" 
          className="w-9 h-9 rounded-full" 
        />
      </Link>

      <ul 
        className={`absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <li className="text-center px-4 py-2 border-b">
          <h6 className="text-sm font-semibold text-gray-800">John Doe</h6>
          <span className="text-xs text-gray-500">Software Engineer</span>
        </li>

        <li className="divide-y divide-gray-200">
          {profileList.map((profile) => (
            <Link 
              key={profile.id}
              to={profile.href}
              className="flex items-center px-4 py-2 hover:bg-gray-100"
              onClick={onToggle} // Close the dropdown when a link is clicked
            >
              <span className="text-xl text-gray-700 mr-2">{profile.icon ? profile.icon : <MdWarningAmber />}</span>
              <span className="text-sm text-gray-700">{profile.title}</span>
            </Link>
          ))}
        </li>

        <li className="border-t">
          <Link 
            to="#"
            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            onClick={onToggle} // Close the dropdown when a link is clicked
          >
            <MdLogout className="text-xl mr-2" />
            <span>Sign out</span>
          </Link>
        </li>
      </ul>
    </li>
  );
}

NavProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default NavProfile;




// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { 
//   MdWarningAmber,
//   MdLogout 
// } from "react-icons/md";

// import { profileList } from '../../constants/index';

// function NavProfile() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   return (
//     <li className="relative">
//       <Link 
//         to="#"
//         className="flex items-center space-x-2"
//         onClick={toggleDropdown}>
//         <img 
//           src="/profile.png" 
//           alt="profile_image" 
//           className="w-9 h-9 rounded-full" 
//         />
//       </Link>

//       <ul 
//         className={`absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}
//         onMouseLeave={closeDropdown}>
//         <li className="text-center px-4 py-2 border-b">
//           <h6 className="text-sm font-semibold text-gray-800">John Doe</h6>
//           <span className="text-xs text-gray-500">Software Engineer</span>
//         </li>

//         <li className="divide-y divide-gray-200">
//           {profileList.map((profile) => (
//             <Link 
//               key={profile.id}
//               to={profile.href}
//               className="flex items-center px-4 py-2 hover:bg-gray-100">
//               <span className="text-xl text-gray-700 mr-2">{profile.icon ? profile.icon : <MdWarningAmber />}</span>
//               <span className="text-sm text-gray-700">{profile.title}</span>
//             </Link>
//           ))}
//         </li>

//         <li className="border-t">
//           <Link 
//             to="#"
//             className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
//             <MdLogout className="text-xl mr-2" />
//             <span>Sign out</span>
//           </Link>
//         </li>
//       </ul>
//     </li>
//   );
// }

// export default NavProfile;
