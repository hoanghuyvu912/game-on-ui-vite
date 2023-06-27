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
  return request({
    url: "/users",
    method: "GET",
  });
};

export const fetchUserInfoApi = (id) => {
  return request({
    url: `/users/${id}`,
    method: "GET",
  });
};

export const deleteUserByIdApi = (id) => {
  return request({
    url: `/users/${id}`,
    method: "DELETE",
  });
};

export const fetchAccountInfoApi = (id) => {
  return request({
    url: `/users/user-info`,
    method: "GET",
  });
};