import { request } from "src/config/axios";

export const loginApi = (data) => {
  return request({
    url: `auth/signin`,
    method: "POST",
    data,
  });
};

export const getAdminPage = () => {
  return request({
    url: `admins-page`,
    method: "GET",
  });
};
