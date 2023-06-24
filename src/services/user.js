import { request } from "src/config/axios";
import { USER_INFO_KEY } from "src/constants/common";

export const loginApi = (data) => {
  return request({
    url: `auth/signin`,
    method: "POST",
    data,
  });
};

export const fetchAllUsersApi = () => {
  const userInfo = localStorage.getItem(USER_INFO_KEY);

  return request({
    url: "/users",
    method: "GET",
  });
};

export const fetchUserInforApi = (userId) => {
  const userInfo = localStorage.getItem(USER_INFO_KEY);

  return request({
    url: `/users/${userId}`,
    method: "GET",
  });
};