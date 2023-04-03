import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/User/UserSlice';
import { productsSlice } from '../features/Products/productsSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productsSlice.reducer,
  },
});
