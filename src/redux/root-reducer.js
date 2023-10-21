import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import foodsReduser from "./foods/foods-slice";
import categoryReduser from "./category/category-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistFoodsReducer = persistReducer(persistConfig, foodsReduser);
const persistCategoryReducer = persistReducer(persistConfig, categoryReduser);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  foods: persistFoodsReducer,
  category: persistCategoryReducer,
});

export default rootReducer;
