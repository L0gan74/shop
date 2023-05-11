import { IItem } from "../../types/item";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Cart {
  id: number;
  title: string;
  photo: string;
  price: number;
}

interface CartState {
  items: Cart[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Cart>) {
      const item = action.payload;
      state.items.push(item);
    },
    // addItem: (state, action: PayloadAction<IProduct>) => {
    //   const fintItem = state.items.find((obj) => obj.id === action.payload.id);

    //   if (fintItem) {
    //     fintItem.count++;
    //   } else {
    //     state.items.push({
    //       ...action.payload,
    //       count: 1,
    //     });
    //   }
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price * obj.count + sum;
    //   }, 0);
    // },
    // minusItem: (state, action: PayloadAction<string>) => {
    //   const fintItem = state.items.find((obj) => obj.id === action.payload);
    //   if (fintItem) {
    //     fintItem.count--;
    //     fintItem.totalPrice--;
    //   }
    // },
    // removeItem: (state, action: PayloadAction<string>) => {
    //   state.items = state.items.filter((obj) => obj.id !== action.payload);
    // },
    // clearItems: (state) => {
    //   state.items = [];
    //   state.totalPrice = 0;
    // },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
