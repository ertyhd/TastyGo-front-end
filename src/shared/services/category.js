import instance from "./auth";

export const getCategory = async () => {
  const { data } = await instance.get(
    `api/category/`
  );
  console.log("data", data);
  return data;
};
