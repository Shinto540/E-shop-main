import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: "Laptop", price: 999.99, description: "High-performance laptop", image: "/placeholder.svg?height=200&width=200", category: "Electronics" },
    { id: 2, name: "Smartphone", price: 499.99, description: "Latest smartphone", image: "/placeholder.svg?height=200&width=200", category: "Electronics" },
    { id: 3, name: "Headphones", price: 99.99, description: "Noise-cancelling headphones", image: "/placeholder.svg?height=200&width=200", category: "Electronics" },
    { id: 4, name: "Smartwatch", price: 199.99, description: "Fitness tracking smartwatch", image: "/placeholder.svg?height=200&width=200", category: "Electronics" },
    { id: 5, name: "Running Shoes", price: 79.99, description: "Comfortable running shoes", image: "/placeholder.svg?height=200&width=200", category: "Sports" },
    { id: 6, name: "Yoga Mat", price: 29.99, description: "Non-slip yoga mat", image: "/placeholder.svg?height=200&width=200", category: "Sports" },
    { id: 7, name: "Coffee Maker", price: 69.99, description: "Programmable coffee maker", image: "/placeholder.svg?height=200&width=200", category: "Home" },
    { id: 8, name: "Blender", price: 39.99, description: "High-speed blender", image: "/placeholder.svg?height=200&width=200", category: "Home" },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;

