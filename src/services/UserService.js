import axiosInstance from "./axios-instance";

export function getStaff() {
    return axiosInstance.get( `users/staff`);
}