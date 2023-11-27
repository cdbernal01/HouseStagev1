import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slicesredux/apiSlice.js";
import cartSliceReducer from "./slicesredux/cartSlice.js";
import authSliceReducer from "./slicesredux/authSlice.js";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
