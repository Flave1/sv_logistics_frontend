import axiosInstance from './axios-instance';

export function createCountry(payload) {
    return axiosInstance.post(`country/create`, payload);
  }
  
  export function getSingleCountry(id) {
    return axiosInstance.get(`country/${id}`);
  }
  
  export function getAllCountry() {
    return axiosInstance.get(`country/all`);
  }
  
  export function updateCountry(payload) {
    return axiosInstance.post(`country/update`, payload);
  }
  
  export function deleteCountry(payload) {
    return axiosInstance.post(`country/delete`, payload);
  }