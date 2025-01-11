import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../store/searchSlice';
import { Menu, X, Search, ShoppingCart, LogOut } from 'lucide-react';

function Navbar({ onMenuClick, onLogout }) {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchInput));
    navigate('/products');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="ml-4 text-xl font-bold text-gray-800">
  <img src="E-shop Logo.png" alt="E-shop" width="100px" height="80px" />
</Link>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <form onSubmit={handleSearch} className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <>
                <Link to="/cart" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <ShoppingCart size={20} />
                  <span className="ml-1">({cartItems.length})</span>
                </Link>
                <button onClick={onLogout} className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                  <LogOut size={20} />
                  <span className="ml-1 hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to="/signup" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

