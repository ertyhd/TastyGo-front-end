import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/reviews";

export const getReviews = createAsyncThunk(
  "reviews/allReviews",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getAllReviewes();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const postNewReview = createAsyncThunk(
  "reviews/post",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.postReview(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
