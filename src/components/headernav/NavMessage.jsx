// src/components/nav/NavMessage.jsx
// rafce / rfce

import { Link } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";

import { messageList } from '../../constants/index';

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <Link 
        to="/"
        data-bs-toggle="dropdown"
        className='nav-link nav-icon link'>
        <MdMailOutline />
        <span className='badge bg-primary badge-number'>3</span>
      </Link>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
            You have 3 new messages
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
            {messageList.map((message) => (
            <Link 
                key={message.id}
                to={message.href}
                className='message-item link'>
                <img 
                    src={message.img ? message.img : "/profile.png"} 
                    alt="mail_sender_image"
                    className='rounded-circle' 
                />
                <div className='message-item-content'>
                    <h4 className='message-item-title'>{message.user}</h4>
                    <p className='message-item-description'>{message.body}</p>
                    <span className='message-item-time'>{message.time}</span>
                </div>
            </Link>
            ))}
        </li>

        {/* <li>
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
        </li> */}

        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='dropdown-footer'>
            <Link to='#' className='dropdown-item link'>Show all messages</Link>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;


