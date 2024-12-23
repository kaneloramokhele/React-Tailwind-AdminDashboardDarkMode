// src/components/nav/NavNotice.jsx
// rafce / rfce

import { Link } from 'react-router-dom';
import { GoBell } from "react-icons/go";

import { noticeList } from '../../constants/index';

function NavNotice() {
  return (
    <li className='nav-item dropdown'>
      <Link 
        to="/"
        data-bs-toggle="dropdown"
        className='nav-link nav-icon link'>
        <GoBell />
        <span className='badge bg-primary badge-number'>4</span>
      </Link>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>
            You have 4 new notifications
            <Link
                to="/"
                className='link'>
                <span className='badge rounded-pill bg-primary p-2 ms-2'>
                    View all
                </span>
            </Link>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>
        
        <li>
            {noticeList.map((notice) => (
            <Link 
                key={notice.id}
                to={notice.href}
                className='notification-item link'>
                <span className="icon">{notice.icon ? notice.icon : <GoBell />}</span>
                <div className='notification-item-content'>
                    <h4 className='notification-item-title'>{notice.title}</h4>
                    <p className='notification-item-description'>{notice.body}</p>
                    <span className='notification-item-time'>{notice.time}</span>
                </div>
            </Link>
            ))}
        </li>
        
        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='dropdown-footer'>
            <Link to='#' className='dropdown-item link'>Show all notifications</Link>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;




