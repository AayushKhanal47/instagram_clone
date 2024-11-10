
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 w-full z-10">
      <Link to="/">
        <img 
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="Instagram-logo"
          className="h-20 w-auto" 
        />
      </Link>

      <input 
        type="text" 
        placeholder="Search" 
        className="border border-gray-300 rounded-full py-1 px-4 text-sm focus:outline-none w-1/3"
      />

      <div className="flex space-x-6 items-center">
        <Link to="/" className="text-blue-500">Home</Link> 
        <Link to="/profile" className="text-blue-500">Profile</Link>
        <span className="text-gray-600">Notifications</span>
        <span className="text-gray-600">Messages</span>
      </div>
    </nav>
  );
};

export default Navbar;


