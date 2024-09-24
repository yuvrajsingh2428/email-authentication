import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_BASEURL,
  withCredentials: true 
});
