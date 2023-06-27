import { request } from "src/config/axios";

export const checkout = (data) => {
  return request({
    url: "/receipts",
    method: "POST",
    data,
  });
};
import { USER_INFO_KEY } from "src/constants/common";

export const fetchAllReceiptsApi = () => {
  const userInfo = localStorage.getItem(USER_INFO_KEY);

  return request({
    url: "/receipts",
    method: "GET",
  });
};
