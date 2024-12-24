// src/components/headernav/NavNotice.jsx
// rafce / rfce

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdNotificationsNone } from "react-icons/md";

import { notificationsList } from '../../constants/index';

function NavNotification() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <li className="relative">
      {/* Notification Icon */}
      <button
        onClick={toggleDropdown}
        className="text-[white] text-3xl relative flex items-center focus:outline-none">
          
        <MdNotificationsNone />
        <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          3
        </span>
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
          onMouseLeave={closeDropdown}>
          <li className="px-6 py-3 text-sm font-semibold text-gray-700 border-b">
            You have 3 new notifications
            <Link to="/" className="text-blue-600 text-xs font-medium ml-2">
              View all
            </Link>
          </li>

          <li className="divide-y divide-gray-200">
            {notificationsList.map((notification) => (
              <Link
                key={notification.id}
                to={notification.href}
                className="flex items-center p-4 hover:bg-gray-100"
              >
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <span className="icon">{notification.icon ? notification.icon : <MdNotificationsNone />}</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    {notification.title}
                  </h4>
                  <p className="text-xs text-gray-500">{notification.body}</p>
                  <span className="text-xs text-gray-400">{notification.time}</span>
                </div>
              </Link>
            ))}
          </li>

          <li className="border-t">
            <Link
              to="#"
              className="block px-4 py-2 text-sm text-center text-blue-600 hover:underline"
            >
              Show all notifications
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
}

export default NavNotification;
