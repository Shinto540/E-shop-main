import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, removeFromCart } from '../redux/productSlice';

const CartPage = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
