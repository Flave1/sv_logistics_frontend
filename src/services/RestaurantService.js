import FoodieAlert from '../jsx/utils/alert';
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

export function getCustomerOrders(status) {
  return axiosInstance.get(`order/${status}`);
}

export function acceptOrder(payload) {
  return axiosInstance.post(`order/accept`, payload);
}
export function rejectOrder(payload) {
  return axiosInstance.post(`order/reject`, payload);
}

export function cancelOrder(payload) {
  return axiosInstance.post(`order/cancel`, payload);
}

export async function createQrCode(payload) {
  try {
    const response = await axiosInstance.post(`restaurant/create-qrcode`, payload);
    return response.data;
  } catch (error) {
    console.log('error.response.data', error.response.data);
    FoodieAlert.showError(error.response.data);
    return error;
  }
}
export function reinstateOrder(payload) {
  return axiosInstance.post(`order/reinstate`, payload);
}
