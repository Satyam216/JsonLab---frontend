import { api } from "./api";

export const createCollection = (data) =>
  api.post("/collections", data);

export const fetchCollections = (userId) =>
  api.get(`/collections?user_id=${userId}`);
