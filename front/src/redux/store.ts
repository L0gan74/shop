import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/product";
import cart from "./slices/cart";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
