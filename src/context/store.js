import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import textReducer from './slice/textSlice';
import wishlistReducer from './slice/wishlistSlice';
import cartReducer from './slice/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});