import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/foods";

// import * as api from "../../shared/services/noties";

// export const singup = createAsyncThunk(
//   "noties/search",
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.singup(data);
//       return result;
//     } catch ({ responce }) {
//       return rejectWithValue(responce);
//     }
//   }
// );

// export const fetchAllFoods = createAsyncThunk(
//   "foods/allFoods",
//   async ({page}, { rejectWithValue }) => {
//     try {
//         const result = await api.getAllFoods(page);
//         console.log('result', result);
//       return result;
//     } catch ({ response }) {
//       return rejectWithValue(response);
//     }
//   }
// );
export const fetchFoodsByCategory = createAsyncThunk(
  "foods/FoodsByCategory",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getFoodsByCategory(data);
      console.log("result", result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const fetchFoodsSeasonal = createAsyncThunk(
  "foods/FoodsSeason",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const result = await api.getFoodsSeasonal(data);
      console.log("result", result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
