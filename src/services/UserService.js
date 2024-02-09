import axiosInstance from './axios-instance';

/// Staff
export function getStaff() {
  return axiosInstance.get(`users/staff`);
}
export function getSingleStaff(id) {
  return axiosInstance.get(`users/get-staff/${id}`);
}

export function getCustomers() {
  return axiosInstance.get(`users/customers`);
}

export function createStaff(payload) {
  return axiosInstance.post(`authentication/create-staff`, payload);
}
export function updateStaff(payload) {
  return axiosInstance.put(`users/${payload.id}/update-staff`, payload);
}

export function deleteStaff(payload) {
  return axiosInstance.post(`users/delete`, payload);
}

/// Driver
export function getDrivers() {
  return axiosInstance.get(`users/drivers`);
}

export function getSingleDriver(id) {
  return axiosInstance.get(`users/get-driver/${id}`);
}

export function createDriver(payload) {
  return axiosInstance.post(`authentication/create-driver`, payload);
}

export function updateDriver(payload) {
  return axiosInstance.post(`users/update-driver`, payload);
}

export function deleteDriver(payload) {
  return axiosInstance.post(`users/delete`, payload);
}
