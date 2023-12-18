import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/delivery";

export const postNewQuestion = createAsyncThunk(
  "question/post",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.postQuestion(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
