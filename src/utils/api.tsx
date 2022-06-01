import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const apiInterceptor: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {},
});

apiInterceptor.interceptors.request.use((config: AxiosRequestConfig) => {
  const token: string | null = localStorage.getItem("TokenKey");

  if (config.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }

  return config;
});

export default apiInterceptor;
