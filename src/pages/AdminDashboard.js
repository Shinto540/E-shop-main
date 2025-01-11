import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function AdminDashboard() {
  const user = useSelector((state) => state.auth.user);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const ordersData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Orders',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Sales Trend</h2>
          <Bar data={salesData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <Line data={ordersData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Best Selling Products</h2>
          <ul className="list-disc pl-5">
            <li>Product A - 100 units</li>
            <li>Product B - 85 units</li>
            <li>Product C - 75 units</li>
            <li>Product D - 60 units</li>
            <li>Product E - 50 units</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="space-y-2">
            <li>New order received - #1234</li>
            <li>Product "X" is out of stock</li>
            <li>Customer feedback received for order #5678</li>
            <li>New vendor application submitted</li>
            <li>Monthly sales report generated</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

