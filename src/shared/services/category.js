import instance from "./auth";

export const getCategory = async () => {
  const { data } = await instance.get(`api/category/`);
  return data;
};
