import axios from "axios";

const instance = axios.create({
  // responseType: "data",
  // responseType: "json",
  baseURL: "http://localhost:3005/",
  // baseURL: "https://tastygo-back-end.onrender.com/",
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const singup = async (data) => {
  const result = await instance.post("api/auth/register", data);
  console.log("res", result);
  setToken(result.data.token);
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post("api/auth/login", data);
  return result;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("api/auth/current-user");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post("api/auth/logout");
  setToken();
  return data;
};

export default instance;
