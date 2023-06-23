import { request } from "src/config/axios";
import { USER_INFO_KEY } from "src/constants/common";

export const fetchAllReceiptDetailsApi = (receiptId) => {
  const userInfo = localStorage.getItem(USER_INFO_KEY);

  return request({
    url: `/receipt-details/by-receipt/${receiptId}`,
    method: "GET",
  });
};