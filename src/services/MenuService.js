import axiosInstance from './axios-instance';

/// MenuCategory
export function getRestaurantMenuCategories() {
    return axiosInstance.get(`menu/restaurant-categories`);
  }

  export function createMenuCategory(payload) {
    return axiosInstance.post(`menu/create-category`, payload);
  }