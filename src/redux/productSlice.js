import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
  currentProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductDetails: (state, action) => {
      state.currentProduct = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setProducts, setProductDetails, addToCart, removeFromCart } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectCart = (state) => state.product.cart;
export const selectCurrentProduct = (state) => state.product.currentProduct;

export default productSlice.reducer;
