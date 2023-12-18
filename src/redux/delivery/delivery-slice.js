import { createSlice } from "@reduxjs/toolkit";
import { postNewQuestion } from "./delivery-operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: "question",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postNewQuestion.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(postNewQuestion.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(postNewQuestion.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default reviewsSlice.reducer;
