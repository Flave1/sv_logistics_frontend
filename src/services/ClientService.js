
import axiosInstance from './axios-instance';

/// Client
export function getAllClients() {
  return axiosInstance.get(`client/all`);
}