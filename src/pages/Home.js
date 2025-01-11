import React from 'react';
import ProductList from '../components/ProductList';


function Home() {
  // Define carousel items
 
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome to our E-commerce Shop</h1>
      <div style={{ position: 'relative', width: '100%', height: '585px' }}>
        <img src="Home IMage.png" alt="E-shop" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
          <h5 className='font-extrabold color-white text-7xl'>Spice Nyanya</h5>
          <h2>Shop the Best Products Here!</h2>
        </div>
      </div>
      <div>New Arrivals</div>
      <div>Shop by Category</div>
      <div>Featured Products</div>
      {/* ProductList component */}
      <ProductList />
      
    </div>
  );
}

export default Home;
