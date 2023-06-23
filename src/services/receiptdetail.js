import { request } from "src/config/axios";
import { USER_INFO_KEY } from "src/constants/common";

export const fetchAllReceiptsApi = () => {
  const userInfo = localStorage.getItem(USER_INFO_KEY);

  return request({
    url: "/receipts",
    method: "GET",
  });
};