import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, selectProducts } from '../redux/productSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    // Fetch products (you can replace this with an actual API call)
    dispatch(setProducts([
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
    ]));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl">{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
