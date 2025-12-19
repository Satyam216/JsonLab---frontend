import { api } from "./api";

export const fetchHistory = async () => {
  const res = await api.get("/history");
  return res.data;
};
