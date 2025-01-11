import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import authReducer from './authSlice';
import sidebarReducer from './sidebarSlice';

// Load cart state from localStorage
const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save cart state to localStorage
const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

export const store = configureStore({
  reducer: {
    search: searchReducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
  },
  preloadedState: {
    cart: loadCartState(),
  },
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

