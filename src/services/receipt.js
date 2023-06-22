import { request } from "src/config/axios";

export const checkout = (data) => {
  return request({
    url: "/receipts",
    method: "POST",
    data,
  });
};
