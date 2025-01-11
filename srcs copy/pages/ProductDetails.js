import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails, selectCurrentProduct } from '../redux/productSlice';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectCurrentProduct);

  useEffect(() => {
    // Fetch product details (you can replace this with an actual API call)
    dispatch(setProductDetails({ id, name: `Product ${id}`, price: 100 }));
  }, [dispatch, id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;
