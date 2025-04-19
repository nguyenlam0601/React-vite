import axios from "../services/api.customize";
const createUserApi = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    fullName,
    email,
    password,
    phone,
  };
  return axios.post(URL_BACKEND, data);
};
const updateUserApi = () => {};
const getUserApi = () => {
  const URL_BACKEND = "/api/v1/user";
  return axios.get(URL_BACKEND);
};
export { createUserApi, updateUserApi, getUserApi };
