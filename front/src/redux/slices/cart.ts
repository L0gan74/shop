import { createSlice } from "@reduxjs/toolkit";
import { getItemLocalStorage } from "../../utils/getItemLocalStorage";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

const { items, totalPrice } = getItemLocalStorage();

const initialState = {
  items,
  totalPrice,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // @ts-ignore
      const fintItem = state.items.find((obj) => obj.id === action.payload.id);

      if (fintItem) {
        // @ts-ignore
        fintItem.count++;
      } else {
        // @ts-ignore
        state.items.push({
          // @ts-ignore
          ...action.payload,
          // @ts-ignore
          count: 1,
        });
      }
      // @ts-ignore
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem: (state, action) => {
      // @ts-ignore
      const fintItem = state.items.find((obj) => obj.id === action.payload);
      if (fintItem) {
        // @ts-ignore
        fintItem.count--;
        // @ts-ignore
        fintItem.totalPrice--;
      }
    },
    removeItem: (state, action) => {
      // @ts-ignore
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    addFavorites: (state, action) => {
      const fintFavorites = state.items.find(
        // @ts-ignore
        (obj) => obj.id === action.payload.id
      );
    },
    deleteFavorites: (state, action) => {
      // @ts-ignore
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const {
  addItem,
  removeItem,
  minusItem,
  clearItems,
  addFavorites,
  deleteFavorites,
} = cartSlice.actions;

export default cartSlice.reducer;
