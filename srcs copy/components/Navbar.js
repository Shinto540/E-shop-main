import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">eCommerce</Link>
      <div className="flex space-x-4">
        <Link to="/cart">Cart</Link>
        <input type="text" placeholder="Search..." className="p-2" />
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
