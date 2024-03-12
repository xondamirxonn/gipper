import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../services/storage";
const initialState = loadState("qualifier") || {
  qualifiers: [],
  qualifiersCount: 0,
};

const qualifiers = createSlice({
  name: "qualifier",
  initialState,
  reducers: {
    QualifierLength: (state) => {
      return { ...state, qualifiersCount: state.qualifiers.length };
    },

    addQualifier: (state, action) => {
      const find = state.qualifiers.find(
        (item) => item.id === action.payload.id
      );
      if (!find) {
        return {
          ...state,
          qualifiers: [
            ...state.qualifiers,
            {
              ...action.payload,
            },
          ],
        };
      }
      return state;
    },

    removeQualifier: (state, action) => {
      return {
        ...state,
        qualifiers: state.qualifiers.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export const Qualifier = qualifiers.reducer;

export const { addQualifier, removeQualifier, QualifierLength } =
  qualifiers.actions;
