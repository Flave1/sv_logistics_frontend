import axiosInstance from './axios-instance';

export function getStaff() {
  return axiosInstance.get(`users/staff`);
}
export function getSingleStaff(id) {
  return axiosInstance.get(`users/get-staff/${id}`);
}

export function getDrivers() {
  return axiosInstance.get(`users/drivers`);
}

export function getCustomers() {
  return axiosInstance.get(`users/customers`);
}

export function createStaff(payload) {
  return axiosInstance.post(`authentication/create-staff`, payload);
}
export function updateStaff(payload) {
  return axiosInstance.post(`users/update-user`, payload);
}

export function deleteStaff(payload) {
  return axiosInstance.post(`users/delete`, payload);
}
