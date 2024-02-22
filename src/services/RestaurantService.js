import FoodieAlert from '../jsx/utils/alert';
import axiosInstance from './axios-instance';

/// Restaurant
export function getAllRestaurants() {
  return axiosInstance.get(`restaurant/all`);
}

export function getDashboardStats() {
  return axiosInstance.get(`restaurant/statistics`);
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

export function getOrdersInKitchen(status) {
  return axiosInstance.get(`order/kitchen/${status}`);
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

export async function prepareOrder(id) {
  const payload = {
    checkoutOrderId: id,
  };
  try {
    const response = await axiosInstance.post(`/order/prepare`, payload);
    return response.data;
  } catch (error) {
    console.log('error.response.data', error.response.data);
    FoodieAlert.showError(error.response.data);
    return error;
  }
}

export async function getUserPermissions(userId, type) {
  try {
    const response = (await axiosInstance.get(`/users/permission/${userId}/${type}`));
    return response.data;
  } catch (error) {
    console.log('error.response.data', error.response.data);
    FoodieAlert.showError(error.response.data);
    return error;
  }
}


export async function savePermissionSettings(payload) {
  try {
    const response = await axiosInstance.post(`/users/permission`, payload);
    return response.data;
  } catch (error) {
    console.log('error.response.data', error.response.data);
    FoodieAlert.showError(error.response.data);
    return error;
  }
}

