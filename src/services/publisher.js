import { request } from "src/config/axios";

export const fetchAllPublishersApi = () => {
  return request({
    url: "/publishers",
    method: "GET",
  });
};
