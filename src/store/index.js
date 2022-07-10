import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { items: [] };

const cartSlice = createSlice({
  name: "iceCreamCart",
  initialState,
  reducers: {
    addIceCream: (state, action) => {
      const existingCartIceCreamIndex = state.items.findIndex((iceCream) => {
        return iceCream.id === action.payload.id;
      });
      const existingCartIceCream = state.items[existingCartIceCreamIndex];
      if (existingCartIceCream) {
        const updatedItem = {
          ...existingCartIceCream,
          amount: existingCartIceCream.amount + action.payload.amount,
        };
        state.items = [...state.items];
        state.items[existingCartIceCreamIndex] = updatedItem;
      } else {
        state.items = [...state.items, action.payload];
      }
    },

    removeIceCream: (state, action) => {
      console.log(action);
    },
  },
});
const store = configureStore({
  reducer: {
    iceCreamCart: cartSlice.reducer,
    removeIceCream: cartSlice.reducer,
  },
});

export const { addIceCream, removeIceCream } = cartSlice.actions;
export default store;
