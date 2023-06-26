import { request } from "src/config/axios";

export const fetchAllGamesApi = () => {
  return request({
    url: `/games`,
    method: "GET",
  });
};

export const fetchFeaturedGamesApi = () => {
  return request({
    url: `/games/featured`,
    method: "GET",
  });
};

export const fetchGameDetailsApi = (id) => {
  return request({
    url: `/games/${id}`,
    method: "GET",
  });
};

export const fetchRecentBestSellerGamesApi = () => {
  return request({
    url: `/games/recent-best-seller`,
    method: "GET",
  });
};

export const fetchRecentWorstSellerGamesApi = () => {
  return request({
    url: `/games/recent-worst-seller`,
    method: "GET",
  });
};
