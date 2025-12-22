import { api } from "./api";

export const fetchHistory = (userId) =>
  api.get(`/history?user_id=${userId}`).then(res => res.data);
