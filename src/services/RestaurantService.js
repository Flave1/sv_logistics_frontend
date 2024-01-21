import axiosInstance from './axios-instance';

/// Restaurant
export function getAllRestaurants() {
  return axiosInstance.get(`restaurant/all`);
}

export function createRestaurant(payload) {
    return axiosInstance.post(`restaurant/create`, payload);
  }

  export function updateRestaurant(payload) {
    return axiosInstance.post(`restaurant/update`, payload);
  }

  export function deleteRestaurant(payload) {
    return axiosInstance.post(`restaurant/delete`, payload);
  }

  export function createQrCode(payload) {
    return axiosInstance.post(`restaurant/create-qrcode`, payload);
  }