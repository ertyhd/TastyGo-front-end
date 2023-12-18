import instance from "./auth";

export const postQuestion = async (data) => {
  try {
    const result = await instance.post("api/faq/question", data);
    return result;
  } catch (error) {
    throw error;
  }
};
