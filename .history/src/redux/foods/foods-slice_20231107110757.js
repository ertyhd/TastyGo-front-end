import { createSlice } from "@reduxjs/toolkit";
import {} from "./foods-operations";

const initialState = {};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  extraReducers: (builder) => {},
});
export default foodsSlice.reducer;
