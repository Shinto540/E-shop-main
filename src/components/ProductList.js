import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const searchQuery = useSelector((state) => state.search.query);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('none');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    let result = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }

    result = result.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    switch (sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [products, searchQuery, selectedCategories, sortBy, priceRange]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 p-4 md:h-screen md:overflow-y-auto">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        {categories.map(category => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
        <h2 className="text-lg font-semibold mt-4 mb-2">Price Range</h2>
        <div className="mt-4">
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={priceRange.max} 
            onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
            className="w-full"
          />
          <span>Max Price: ${priceRange.max}</span>
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Products</h2>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="none">Sort by</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="name_asc">Name: A to Z</option>
            <option value="name_desc">Name: Z to A</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </Link>
              <button 
                onClick={() => dispatch(addToCart(product))}
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;

