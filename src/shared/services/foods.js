// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://localhost:3005/",
// });
// export default instance;

import instance from "./auth";

export const getAllFoods = async (totalFoods = 12, totalPages=1) => {
  const { data } = await instance.get(
    `api/food?page=${totalPages}&limit=${totalFoods}`
  );

  return data;
};

export const getFoodsByCategory = async ({
  category = "salads",
  totalFoods = 12,
  totalPages = 1,
}) => {
  const { data } = await instance.get(
    `api/food/category/${category}?page=${totalPages}&limit=${totalFoods}`
  );
  
  return data;
};
export const getFoodsSeasonal = async ({
  totalFoods = 12,
  totalPages = 1,
}) => {
  const { data } = await instance.get(
    `api/food/seasonal?page=${totalPages}&limit=${totalFoods}`
  );
  
  return data;
};

