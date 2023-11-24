import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3005/",
   baseURL: "https://tastygo-back-end.onrender.com/",
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const singup = async (data) => {
  const result = await instance.post("api/auth/register", data);

  setToken(result.data.token);
  return result;
};

export const login = async (data) => {
  const result = await instance.post("api/auth/login", data);
  setToken(result.data.token);

  return result;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("api/auth/current-user");

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (data) => {
  const result = await instance.patch("api/auth/update-user", data);

  return result;
};

export const updateUserAvatar = async (data) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const result = await instance.patch("api/auth/avatars", data, header);
  return result;
};

export const deleteAvatar = async () => {
  const result = await instance.delete("api/auth/delete-avatar");
  return result;
};

export const logout = async () => {
  const { data } = await instance.post("api/auth/logout");
  setToken();
  return data;
};

export default instance;
