import { createSlice } from "@reduxjs/toolkit";
import {} from "./category-operations";

const initialState = {};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {},
});
export default categorySlice.reducer;
