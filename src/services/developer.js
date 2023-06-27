import { request } from "src/config/axios";

export const fetchAllDevelopersApi = () => {
  return request({
    url: "/developers",
    method: "GET",
  });
};

export const fetchDeveloperByIdApi = (id) => {
  return request({
    url: `/developers/${id}`,
    method: "GET",
  });
};
