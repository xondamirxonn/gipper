import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../services/storage";
const initialState = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state, action) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },

    productLength: (state) => {
      return { ...state, count: state.products.length };
    },

    add: (state, action) => {
      const idf = state.products.find((item) => item.id === action.payload.id);
      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }
      console.log(state, action);
      return state;
    },

    remove: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },

    ToggleCount: (state, action) => {
      if (action.payload.type === "add") {
        const newCount = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }
          return item;
        });

        return { ...state, products: newCount };
      }

      if (action.payload.type === "remove") {
        const newCount = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });

        return { ...state, products: newCount };
      }
    },
    
  },
});

export const Products = product.reducer;

export const { add, remove, productLength, totalPrice, ToggleCount } =
  product.actions;
