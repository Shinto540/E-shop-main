import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, ShoppingBag, ShoppingCart, User, LogOut } from 'lucide-react';

function Sidebar({ isOpen, onLogout }) {
  const user = useSelector((state) => state.auth.user);

  const sidebarClasses = `fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`;

  const linkClasses = `flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded`;

  return (
    <div className={sidebarClasses}>
      <div className="flex flex-col h-full">
        <nav className="flex-grow overflow-y-auto">
          <div className="p-4">
            <h2 className="text-xl font-semibold">Menu</h2>
          </div>
          <ul className="space-y-2 p-4">
            <li>
              <Link to="/" className={linkClasses}>
                <Home size={24} />
                <span className="ml-2">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className={linkClasses}>
                <ShoppingBag size={24} />
                <span className="ml-2">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className={linkClasses}>
                <ShoppingCart size={24} />
                <span className="ml-2">Cart</span>
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/dashboard" className={linkClasses}>
                  <User size={24} />
                  <span className="ml-2">Dashboard</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button onClick={onLogout} className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center">
            <LogOut size={24} />
            <span className="ml-2">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

