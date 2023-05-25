import { createSlice } from "@reduxjs/toolkit";

export const renameSlice = createSlice({
  name: "rename",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = renameSlice.actions;
