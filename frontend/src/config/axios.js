import axios from "axios";
import dotenv from 'dotenv'
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});