import { createSlice } from '@reduxjs/toolkit';

const dummyUsers = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { id: 2, name: 'Vendor User', email: 'vendor@example.com', password: 'vendor123', role: 'vendor' },
  { id: 3, name: 'Customer User', email: 'customer@example.com', password: 'customer123', role: 'customer' },
];

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = dummyUsers.find(u => u.email === email && u.password === password);
      if (user) {
        state.user = { id: user.id, name: user.name, email: user.email, role: user.role };
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    signup: (state, action) => {
      const { name, email, password } = action.payload;
      const newUser = { id: dummyUsers.length + 1, name, email, password, role: 'customer' };
      dummyUsers.push(newUser);
      state.user = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;

