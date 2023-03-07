// axios is used to perform rest calls.
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  // cominly requires headers spicefication.
  headers: { "Content-Type": "application/json" },
});
export default api;
