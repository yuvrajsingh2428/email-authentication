import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: "https://email-authentication-backend.onrender.com/api/v1/auth", // Hard-coded backend URL
  withCredentials: true,
});
