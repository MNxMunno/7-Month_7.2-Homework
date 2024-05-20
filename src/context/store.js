import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api/api";
import wishlistSlice from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    // cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
