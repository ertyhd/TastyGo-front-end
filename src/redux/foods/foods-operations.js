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
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
export const fetchFoodsSeasonal = createAsyncThunk(
  "foods/FoodsSeason",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getFoodsSeasonal(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
  
);
export const fetchFoodsPopular = createAsyncThunk(
  "foods/FoodsPopular",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getFoodsPopular(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
