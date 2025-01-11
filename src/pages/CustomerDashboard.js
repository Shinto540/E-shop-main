import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';

function CustomerDashboard() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Customer Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      {/* Add customer-specific content here */}
      <ProductList />
    </div>
  );
}

export default CustomerDashboard;

