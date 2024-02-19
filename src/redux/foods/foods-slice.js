import { createSlice } from "@reduxjs/toolkit";
import {
  // fetchAllFoods,
  fetchFoodsByCategory,
  fetchFoodsSeasonal,
  fetchFoodsPopular,
} from "./foods-operations";

const initialState = {
  itemsFoodByCategory: [],
  itemsFoodSeasonal: [],
  itemsFoodPopular: [],
  totalFoods: null,
  totalPages: 1,

  loading: false,
  error: null,
};
const handlePending = (store) => {
  store.loading = true;
};
const handleReject = (store, action) => {
  store.loading = false;
  store.error = action.payload;
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,

  extraReducers: (builder) => {
    builder
    
      .addCase(fetchFoodsByCategory.pending, (store) => {
        handlePending(store);
      })
      .addCase(fetchFoodsByCategory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.itemsFoodByCategory = payload.foods;
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
        store.itemsFoodSeasonal = payload;
        store.totalFoods = payload.totalFoods;
        store.totalPages = payload.totalPages;
      })
      .addCase(fetchFoodsSeasonal.rejected, (store, action) => {
        handleReject(store, action);
      })
      .addCase(fetchFoodsPopular.pending, (store) => {
        handlePending(store);
      })
      .addCase(fetchFoodsPopular.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.itemsFoodPopular = payload.popularFoods;
        store.totalFoods = payload.totalFoods;
        store.totalPages = payload.totalPages;
      })
      .addCase(fetchFoodsPopular.rejected, (store, action) => {
        handleReject(store, action);
      });
  },
});
export default foodsSlice.reducer;

