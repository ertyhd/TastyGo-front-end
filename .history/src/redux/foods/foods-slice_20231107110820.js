import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFoods, fetchFoodsByCategory } from "./foods-operations";
// console.log("fetchAllFoods", fetchAllFoods());
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

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(fetchAllFoods.pending, (store) => {
      //   handlePending(store);
      // })
      // .addCase(fetchAllFoods.fulfilled, (store, { payload }) => {
      //   console.log('payload', payload);
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
        console.log("payload", payload);
        store.loading = false;
        store.items = payload.foods;
      })
      .addCase(fetchFoodsByCategory.rejected, (store, action) => {
        handleReject(store, action);
      });
  },
});
export default foodsSlice.reducer;
