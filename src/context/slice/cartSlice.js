import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...payload, amount: 1 }];
      }
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter((el) => el.id !== payload.id);
    },
    increaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) => {
        if (inx === index) {
          return { ...el, amount: el.amount + 1 };
        } else {
          return el;
        }
      });
    },
    decreaseAmount: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) => {
        if (inx === index) {
          const newAmount = el.amount - 1;
          return newAmount > 0 ? { ...el, amount: newAmount } : null;
        } else {
          return el;
        }
      }).filter((el) => el !== null);
    },
    removeAll: (state) => {
      state.value = [];
    },
  },
});

export const { add, remove, increaseAmount, decreaseAmount, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
