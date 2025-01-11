import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto bg-white rounded-lg shadow-lg overflow-hidden flex py-16">
        <div style={{ position: 'relative', width: '1080px', height: '5800px' }}>
          <img src="signing.png" alt="Login" className="object-cover" width='920px' height='200px' />
          <div style={{ width: '500px', height: '200px', objectFit: 'cover' }} />
          <div style={{ 
            position: 'absolute', 
            top: '11%', 
            left: '35%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white', 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            padding: '10px' 
          }}>
            <p className='color-white text-3xl px-10'>
              Please sign in to
            </p>
            <p className='color-white text-3xl px-10'>
               securely access your
            </p>
            <p className='color-white text-3xl px-10'>
              account.
            </p>
            <p className='text-sm px-10 py-5'>
              Welcome back! We're thrilled to have you return to our platform. Your presence means a lot to us.</p>
          </div>
        </div>
        <div className="w-1/2 p-8">
        <div className="py-16">
             <img src="E-shop Logo.png" alt="E-shop" width="100px" height="200px" />
           </div>
          <h2 className="text-3xl font-semibold mb-4">Sign Up to create </h2>
          <h2 className="text-3xl font-semibold mb-4 italic">your account </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder='Enter your phone number'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember password?</span>
              </label>
            
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

