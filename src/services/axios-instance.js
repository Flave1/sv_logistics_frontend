import axios from 'axios';
import { refreshToken } from './AuthService';
const axiosInstance = axios.create({
  // baseURL: 'http://3.81.254.132:3200/',
  baseURL: 'http://localhost:3200/',
  headers: {
    Authorization: '',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  async (response) => response,
  async (error) => {
    console.log('error.response.status', error.response.status);

    if (error.response.status === 500) {
      console.log('error.response', error.response);
    }
    if (error.response.status === 404) {
      console.log('error.response', error.response);
      return error.response;
    }

    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const sessionToken = await localStorage.getItem('token');
      const resp = await refreshToken(sessionToken);
      if (resp.status === 401) {
        return
      }
      const access_token = resp.message;
      await localStorage.setItem('token', access_token);

      axiosInstance.defaults.headers.Authorization = 'Bearer ' + access_token;
      return axiosInstance(originalRequest);
    }
    // return Promise.reject(error);

    throw error;
  },
);

axiosInstance.interceptors.request.use(
  async (config) => {
    const sessionToken = await localStorage.getItem('token');
    if (sessionToken !== null && config.headers) {
      config.headers.Authorization = 'Bearer ' + sessionToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
