import React from 'react';
import { useSelector } from 'react-redux';

function VendorDashboard() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Vendor Dashboard</h1>
      <p>Welcome, {user.name}!</p>
      {/* Add vendor-specific content here */}
    </div>
  );
}

export default VendorDashboard;

