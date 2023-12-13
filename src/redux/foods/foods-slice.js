import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllFoods,
  fetchFoodsByCategory,
  fetchFoodsSeasonal,
} from "./foods-operations";
// console.log("fetchAllFoods", fetchAllFoods());
const initialState = {
  items: [],
  totalFoods: null,
  totalPages: 1,

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

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(fetchAllFoods.pending, (store) => {
      //   handlePending(store);
      // })
      // .addCase(fetchAllFoods.fulfilled, (store, { payload }) => {
      //   store.loading = false;
      //   store.items = payload.foods;
      // })
      // .addCase(fetchAllFoods.rejected, (store, action) => {
      //   handleReject(store, action);
      // })
      .addCase(fetchFoodsByCategory.pending, (store) => {
        handlePending(store);
      })
      .addCase(fetchFoodsByCategory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload.foods;
        store.totalFoods = payload.totalFoods;
        store.totalPages = payload.totalPages;
      })
      .addCase(fetchFoodsByCategory.rejected, (store, action) => {
        handleReject(store, action);
      })
      .addCase(fetchFoodsSeasonal.pending, (store) => {
        handlePending(store);
      })
      .addCase(fetchFoodsSeasonal.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
        store.totalFoods = payload.totalFoods;
        store.totalPages = payload.totalPages;
      })
      .addCase(fetchFoodsSeasonal.rejected, (store, action) => {
        handleReject(store, action);
      });
  },
});
export default foodsSlice.reducer;
