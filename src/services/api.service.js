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
const updateUserApi = (_id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id,
    fullName,
    phone,
  };
  return axios.put(URL_BACKEND, data);
};
const deleteUserApi = (_id) => {
  const URL_BACKEND = `/api/v1/user/${_id}`;
  return axios.delete(URL_BACKEND);
};
const getUserApi = (current, pageSize) => {
  const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_BACKEND);
};
const handleUploadFile = (file, folder) => {
  const URL_BACKEND = "/api/v1/file/upload";
  let config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);
  return axios.post(URL_BACKEND, bodyFormData, config);
};
const updateAvatarUserApi = (avatar, _id, fullName, phone) => {
  const URL_BACKEND = "/api/v1/user";
  const data = {
    _id,
    fullName,
    phone,
    avatar,
  };
  return axios.put(URL_BACKEND, data);
};
const registerUserApi = (fullName, email, password, phone) => {
  const URL_BACKEND = "/api/v1/user/register";
  const data = {
    fullName,
    email,
    password,
    phone,
  };
  return axios.post(URL_BACKEND, data);
};
const loginApi = (email, password) => {
  const URL_BACKEND = "/api/v1/auth/login";
  const data = {
    username: email,
    password: password,
  };
  return axios.post(URL_BACKEND, data);
};

const getAccountApi = () => {
  const URL_BACKEND = "/api/v1/auth/account";
  return axios.get(URL_BACKEND);
};

export {
  createUserApi,
  updateUserApi,
  deleteUserApi,
  getUserApi,
  handleUploadFile,
  updateAvatarUserApi,
  registerUserApi,
  loginApi,
  getAccountApi,
};
