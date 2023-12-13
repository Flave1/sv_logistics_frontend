import axiosInstance from "./axios-instance";

export function getStaff() {
    return axiosInstance.get( `users/staff`);
}

export function getDrivers() {
    return axiosInstance.get( `users/drivers`);
}

export function getCustomers() {
    return axiosInstance.get( `users/customers`);
}