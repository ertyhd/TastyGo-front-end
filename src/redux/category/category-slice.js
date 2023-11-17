import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "./category-operations";


const initialState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (store) => {
  store.loading = true;
};
const handleReject = (store, action) => {
  // store.items = [];
  store.loading = false;
  store.error = action.payload;
};


const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (store) => {
        handlePending(store);
      })
      .addCase(fetchCategory.fulfilled, (store, { payload }) => {
        
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchCategory.rejected, (store, action) => {
        handleReject(store, action);
      });
  },
});
export default categorySlice.reducer;
