import { request } from "src/config/axios";

export const fetchAllReceiptDetailsApi = (receiptId) => {
  return request({
    url: `/receipt-details/by-receipt/${receiptId}`,
    method: "GET",
  });
};
