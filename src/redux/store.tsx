import { configureStore } from "@reduxjs/toolkit";
import countereducer from "./CounterSlice";
import productReducer from "./Prodcuts/ProductSlice";
export const store = configureStore({
  reducer: {
    counter: countereducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
