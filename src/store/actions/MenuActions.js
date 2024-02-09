import {
  getRestaurantMenuCategories,
  createMenuCategory,
  getMenuByCategoryId,
  createMenu,
  getSingleMenu,
  updateMenu,
  deleteMenu,
  getSingleMenuCategory,
  updateCategoryMenu,
  deleteMenuCategory,
  getAllRestaurantMenu,
} from '../../services/MenuService';
import swal from 'sweetalert';
import { spinner } from './AuthActions';

export const GET_ALL_RESTAURANT_MENU_CATEGORIES = '[GET_ALL_RESTAURANT_MENU_CATEGORIES] get all restaurant menu categories';

export const GET_ALL_RESTAURANT_MENU = '[GET_ALL_RESTAURANT_MENU] get all restaurant menu';

///Menu Actions
export function getMenuCategoriesAction() {
  return (dispatch) => {
    dispatch(spinner(true))
    getRestaurantMenuCategories()
      .then((response) => {
        dispatch(spinner(false))
        dispatch({
          type: GET_ALL_RESTAURANT_MENU_CATEGORIES,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function createCategoryAction(payload, setShowForm, resetForm) {
  return (dispatch) => {
    dispatch(spinner(true))
    createMenuCategory(payload)
      .then((response) => {
        dispatch(spinner(false))
        setShowForm(false);
        resetForm();
        swal('Successful', 'Category successfully created', 'success');
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function getMenuByCategoryIdAction(id) {
  return (dispatch) => {
    dispatch(spinner(true))
    getMenuByCategoryId(id)
      .then((response) => {
        dispatch(spinner(false))
        dispatch({
          type: GET_ALL_RESTAURANT_MENU,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function getMenuCategoriesAction2() {
  return getRestaurantMenuCategories()
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = error.response; //formatError(error.response.data);
      swal('Oops', errorMessage, 'error');
    });
}

export function getAllMenuAction() {
  return (dispatch) => {
    dispatch(spinner(true))
    getAllRestaurantMenu()
      .then((response) => {
        dispatch(spinner(false))
        dispatch({
          type: GET_ALL_RESTAURANT_MENU,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function createMenuAction(payload, setShowForm, resetForm) {
  return (dispatch) => {
    dispatch(spinner(true))
    createMenu(payload)
      .then((response) => {
        dispatch(spinner(false))
        setShowForm(false);
        resetForm();
        swal('Successful', 'Menu successfully created', 'success');
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export async function getSingleMenuAction(id) {
  return getSingleMenu(id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      swal('Oops', errorMessage, 'error');
    });
}

export function updateMenuAction(payload, setShowForm, resetForm, setSelectedItem) {
  return (dispatch) => {
    dispatch(spinner(true))
    updateMenu(payload)
      .then((response) => {
        dispatch(spinner(false))
        setShowForm(false);
        resetForm();
        setSelectedItem(null);
        swal('Successful', 'Menu successfully updated', 'success');
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function deleteMenuAction(payload) {
  return (dispatch) => {
    dispatch(spinner(true))
    deleteMenu(payload)
      .then((response) => {
        dispatch(spinner(false))
        swal('Successful', 'Menu successfully deleted', 'success');
        return response.data;
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export async function getSingleMenuCategoryAction(id) {
  return getSingleMenuCategory(id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      swal('Oops', errorMessage, 'error');
    });
}

export function updateCategoryMenuAction(payload, setShowForm, resetForm, setSelectedItem) {
  return (dispatch) => {
    dispatch(spinner(true))
    updateCategoryMenu(payload)
      .then((response) => {
        dispatch(spinner(false))
        setShowForm(false);
        resetForm();
        setSelectedItem(null);
        swal('Successful', 'Menu Category successfully updated', 'success');
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function deleteMenuCategoryAction(payload) {
  return (dispatch) => {
    dispatch(spinner(true))
    deleteMenuCategory(payload)
      .then((response) => {
        dispatch(spinner(false))
        swal('Successful', 'Menu category successfully deleted', 'success');
        return response.data;
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}
