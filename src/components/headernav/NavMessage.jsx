// src/components/headernav/NavMessage.jsx
// rafce / rfce

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMailOutline } from "react-icons/md";

import { messagesList } from '../../constants/index';

function NavMessage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <li className="relative">
      <Link 
        to="#"
        className="text-[white] text-3xl relative flex items-center"
        onClick={toggleDropdown}>
        <MdMailOutline />
        <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">3</span>
      </Link>

      <ul 
        className={`absolute right-0 mt-4 w-64 bg-white border border-gray-200 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        onMouseLeave={closeDropdown}>
        <li className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
          You have 3 new messages
          <Link to="/" className="text-blue-600 text-xs font-medium ml-2">
            View all
          </Link>
        </li>

        <li className="divide-y divide-gray-200">
          {messagesList.map((message) => (
            <Link 
              key={message.id}
              to={message.href}
              className="flex items-center p-4 hover:bg-gray-100">
              <img 
                src={message.img ? message.img : "/profile.png"} 
                alt="mail_sender_image"
                className="w-10 h-10 rounded-full mr-3" 
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-800">{message.user}</h4>
                <p className="text-xs text-gray-500">{message.body}</p>
                <span className="text-xs text-gray-400">{message.time}</span>
              </div>
            </Link>
          ))}
        </li>

        <li className="border-t">
          <Link to="#" className="block px-4 py-2 text-sm text-center text-blue-600 hover:underline">
            Show all messages
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
