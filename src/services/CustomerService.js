import swal from 'sweetalert';
import axiosInstance from './axios-instance';

export function getPopularRestaurants() {
  return axiosInstance.get(`/customer-web/restaurants`);
}
export function getRestaurantMenu(restaurant) {
  return axiosInstance.get(`/customer-web/all-menu/${restaurant}`);
}

export async function createUpdateMenuOrder(payload) {
  return await axiosInstance.post(`/customer-web/save-to-cart`, payload);
}
export async function removeMenuOrder(payload) {
  return await axiosInstance.post(`/customer-web/remove-from-cart`, payload);
}
export async function clearMenuOrder() {
  return await axiosInstance.post(``);
}

export async function fetchMenuOrder() {
  return await axiosInstance.get(``);
}

export async function getCartList(customerId, temporalId) {
  return await axiosInstance.get(`/customer-web/cart-list?customerId=${customerId}&temporalId=${temporalId}`);
}

export async function getCheckoutMenuList(payload) {
  return await axiosInstance.post(`/customer-web/get-checkout-final-menu`, payload);
}
