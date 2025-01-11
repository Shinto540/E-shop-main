import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
