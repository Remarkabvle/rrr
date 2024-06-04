import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../context/slice/counterSlice';
import textReducer from '../context/slice/textSlice';
import wishlistReducer from '../context/slice/wishlistSlice';
import cartReducer from '../context/slice/cartSlice';
import { productsApi } from "../api/index";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
