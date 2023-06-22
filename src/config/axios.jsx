import axios from "axios";
import { Alert } from "flowbite-react";
import { USER_INFO_KEY } from "src/constants/common";

export const request = axios.create({
  baseURL: "http://localhost:8080/api",
});

request.interceptors.request.use((config) => {
  let userInfo = localStorage.getItem(USER_INFO_KEY);

  if (userInfo) {
    userInfo = JSON.parse(userInfo);

    config.headers.Authorization = `Bearer ${userInfo.token}`;

    config.headers["Roles"] = userInfo.roles;
  }

  return config;
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    <Alert>{error.response.data.msg}</Alert>;
  }
);
