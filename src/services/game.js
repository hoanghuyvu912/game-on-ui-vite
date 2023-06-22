import { request } from "src/config/axios";

export const fetchAllGamesApi = () => {
  return request({
    url: `/games`,
    method: "GET",
  });
};

export const fetchGameDetailsApi = (id) => {
  return request({
    url: `/games/${id}`,
    method: "GET",
  });
};

export const fetchGameLibraryApi = () => {
  return request({
    url: `/games/library`,
    method: "GET",
  });
}
