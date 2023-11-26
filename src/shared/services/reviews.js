import instance from "./auth";

export const getAllReviewes = async () => {
  try {
    const { data } = await instance.get("api/review");
    return data;
  } catch (error) {
    throw error;
  }
};

export const postReview = async (data) => {
  try {
    const result = await instance.post("api/review/new-review", data);
    return result;
  } catch (error) {
    throw error;
  }
};
