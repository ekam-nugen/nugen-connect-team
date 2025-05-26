import axios from 'axios';
import { getCookie } from 'cookies-next';

const axiosInstance = axios.create({ baseURL: '/api' });
export const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

axiosInstance.interceptors.request.use(
  config => {
    const token = getCookie('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) window.location.href = '/login';
    return Promise.reject(error);
  }
);

export default axiosInstance;
