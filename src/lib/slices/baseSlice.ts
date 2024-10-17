import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface BaseState {
  base: {
    message: "loading" | "success" | "rejected" | "";
  };
}
const initialState: BaseState = {
  base: {
    message: "",
  },
};
export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {},
});

export const {} = baseSlice.actions;

export const base = (state: RootState) => state.baseState;

export default baseSlice.reducer;
