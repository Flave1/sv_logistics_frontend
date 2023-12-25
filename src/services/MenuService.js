import axiosInstance from './axios-instance';

/// MenuCategory
export function getRestaurantMenuCategories() {
    return axiosInstance.get(`menu/restaurant-categories`);
}

export function createMenuCategory(payload) {
    return axiosInstance.post(`menu/create-category`, payload);
}

export function getMenuByCategoryId(id) {
  return axiosInstance.get(`menu/restaurant-menu/category/${id}`);
}

export function getSingleMenuCategory(id) {
  return axiosInstance.get(`menu/restaurant-category/${id}`);
}

export function createMenu(payload) {
  return axiosInstance.post(`menu/create-menu`, payload);
}

export function getSingleMenu(id) {
  return axiosInstance.get(`menu/restaurant-menu/${id}`);
}

export function getAllRestaurantMenu() {
  return axiosInstance.get(`menu/restaurant-menu`);
}

export function updateMenu(payload) {
  return axiosInstance.post(`menu/update-menu`, payload);
}

export function deleteMenu(payload) {
  return axiosInstance.post(`menu/delete-menu`, payload);
}

export function updateCategoryMenu(payload) {
  return axiosInstance.post(`menu/update-category`, payload);
}

export function deleteMenuCategory(payload) {
  return axiosInstance.post(`menu/delete-category`, payload);
}