import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/category";

export const fetchCategory = createAsyncThunk(
  "Category/AllCategory",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getCategory();
      
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
