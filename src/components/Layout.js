import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { logout } from '../store/authSlice';
import { toggleSidebar, setSidebarOpen } from '../store/sidebarSlice';

function Layout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        dispatch(setSidebarOpen(true));
      } else {
        dispatch(setSidebarOpen(false));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar onMenuClick={handleToggleSidebar} onLogout={handleLogout} />
      <div className="flex flex-1 relative">
        {isAuthenticated && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            onLogout={handleLogout} 
          />
        )}
        <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4 transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : ''
        }`}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

