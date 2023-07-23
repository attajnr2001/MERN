import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
// import { apiSlice } from './slices/apiSlice';
import { apiSlice } from './slices/appSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;