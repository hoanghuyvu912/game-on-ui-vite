import { request } from "src/config/axios";

export const deleteCommentByIdApi = (id) => {
  return request({
    url: `comments/${id}`,
    method: "DELETE",
  });
};
