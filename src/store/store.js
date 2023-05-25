import { configureStore } from "@reduxjs/toolkit";
import { renameSlice } from "./slices/renameSlice";

export const store = configureStore({
  reducer: {
    rename: renameSlice.reducer,
  },
});
