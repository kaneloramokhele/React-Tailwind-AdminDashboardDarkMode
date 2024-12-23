// src/components/nav/NavProfile.jsx
// rafce / rfce

import { Link } from 'react-router-dom';

import { 
    MdWarningAmber,
    MdLogout 
} from "react-icons/md";

import { profileList } from '../../constants/index';

function NavProfile() {
  return (
    <li className='nav-item dropdown pe-3'>
      <Link 
        to="/"
        data-bs-toggle="dropdown"
        className='nav-link nav-profile d-flex align-items-center pe-0'>
        
        <img src="/profile.png" alt="profile_image" className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>Doe</span>
      </Link>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
            <h6>John Doe</h6>
            <span>
                Software Engineer
            </span>
        </li>

        <li>
            <hr className='dropdown-divider' />
        </li>

        <li>
            {profileList.map((profile) => (
            <Link 
                key={profile.id}
                to={profile.href}
                className='dropdown-item d-flex align-items-center'>
                <span className="icon">{profile.icon ? profile.icon : <MdWarningAmber />}</span>
                <span>{profile.title}</span>
            </Link>
            ))}
        </li>

        <li>
            <hr className='dropdown-divider' />
        </li>

        <li>
            <Link 
                to="#"
                className='dropdown-item d-flex align-items-center sign-out'>
                <MdLogout className='icon' />
                <span>Sign out</span>
            </Link>
        </li>
      </ul>
    </li>
  );
}

export default NavProfile;


