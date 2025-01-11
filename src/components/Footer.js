import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer> 
      <div className="flex flex-wrap justify-between mb-16 bg-white">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <img src="shoppingBag.png" alt="Image 1" className="mx-auto mb-2" />
            <p className=" font-bold text-3xl">Free Delivery</p>
            <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat faucibus rutrum.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <img src="secure.png" alt="Image 2" className="mx-auto mb-2" />
            <p className="font-bold text-3xl">Secure Payments</p>
            <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat faucibus rutrum.</p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <img src="leaf.png" alt="Image 3" className="mx-auto mb-2" />
            <p className="font-bold text-3xl">Best Quality Material</p>
            <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat faucibus rutrum.</p>
          </div>
        </div>
    <div className="bg-blue-700 text-white py-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-wrap ">
        {/* <Link to="/" className="ml-4 text-xl font-bold text-gray-800">
             <img src="E-shop Logo.png" alt="E-shop" width="100px" height="80px" />
           </Link> */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <Link to="/" className="ml-4 text-xl font-bold text-gray-800">
             <img src="E-shop Logo.png" alt="E-shop" width="100px" height="80px" />
           </Link>
            <p className="text-m py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat faucibus rutrum. Donec ac ante eu elit maximus mattis. Nullam posuere viver</p>
            <div className="flex space-x-4 justify-center mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-yellow-400 round-white">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-yellow-400 round-white">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-yellow-400 round-white">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-yellow-400 round-white">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 py-5">
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">Shop</h3>
              <p className="text-m py-3">Food</p>
              <p className="text-m py-3">Beverages</p>
              <p className="text-m py-3">Cosmetics</p>
              <p className="text-m py-3">Home Decor</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">Help & Information</h3>
            <p className="text-m py-3 ">How to order</p>
            <p className="text-m py-3">Terms and Condition</p>
            <p className="text-m py-3">Help Center</p>
            <p className="text-m py-3">Terms of use</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2 text-yellow-400">My Account</h3>
            <p className="text-m py-3 ">My Orders</p>
            <p className="text-m py-3">Favourites</p>
            <p className="text-m py-3">Lorem ipsum</p>
            <p className="text-m py-3">Lorem ipsum</p>
          </div>
          
        </div>
        <hr className="border-white-700 mb-8" />
        <div className="mt-8 text-center text-sm">
          <p>&copy; EShops 2024 Copyright</p>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;

