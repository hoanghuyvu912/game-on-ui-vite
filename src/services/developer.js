import { request} from "src/config/axios";
import { USER_INFO_KEY } from "src/constants/common";

export const fetchAllDevelopersApi = () => {
  const userInfo = localStorage.getItem(USER_INFO_KEY);

  return request({
    url: "/developers",
    method: "GET",
  });
};
