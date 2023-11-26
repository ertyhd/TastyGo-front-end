import { createSlice } from "@reduxjs/toolkit";
import { getReviews, postNewReview } from "./reviews-operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getReviews.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(getReviews.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(postNewReview.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(postNewReview.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(postNewReview.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default reviewsSlice.reducer;
