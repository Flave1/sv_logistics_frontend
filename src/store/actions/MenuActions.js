import { getRestaurantMenuCategories, createMenuCategory, getMenuByCategoryId, createMenu, getSingleMenu, updateMenu, deleteMenu, getSingleMenuCategory, 
  updateCategoryMenu, deleteMenuCategory, getAllRestaurantMenu} from "../../services/MenuService";
import swal from 'sweetalert';

export const GET_ALL_RESTAURANT_MENU_CATEGORIES = '[get action] get all restaurant menu categories';

export const GET_ALL_RESTAURANT_MENU = '[get action] get all restaurant menu';

///Menu Actions
export function getMenuCategoriesAction() {
    return (dispatch) => {
        getRestaurantMenuCategories()
        .then((response) => {
          dispatch({
            type: GET_ALL_RESTAURANT_MENU_CATEGORIES,
            payload: response.data.data,
          });
        })
        .catch((error) => {
          const errorMessage = error.response; //formatError(error.response.data);
          swal('Oops', errorMessage, 'error');
        });
    };
}

export function createCategoryAction(payload, setShowForm, resetForm) {
  return (dispatch) => {
    createMenuCategory(payload)
      .then((response) => {
        setShowForm(false);
        resetForm();
        swal('Successful', 'Category successfully created', 'success');
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export async function getMenuByCategoryIdAction(id) {
  return getMenuByCategoryId(id)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      swal('Oops', errorMessage, 'error');
    });
}

export function getMenuCategoriesAction2() {
  return getRestaurantMenuCategories()
      .then((response) => {
        return response.data.data
        })
      .catch((error) => {
        const errorMessage = error.response; //formatError(error.response.data);
        swal('Oops', errorMessage, 'error');
      });
};

export function getAllMenuAction() {
  return (dispatch) => {
    getAllRestaurantMenu()
      .then((response) => {
        dispatch({
          type: GET_ALL_RESTAURANT_MENU,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        const errorMessage = error.response.data.message; //formatError(error.response.data);
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function createMenuAction(payload, setShowForm, resetForm) {
  return (dispatch) => {
    createMenu(payload)
      .then((response) => {
        setShowForm(false);
        resetForm();
        swal('Successful', 'Menu successfully created', 'success');
      })
      .catch((error) => {
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
    updateMenu(payload)
      .then((response) => {
        setShowForm(false);
        resetForm();
        setSelectedItem(null);
        swal('Successful', 'Menu successfully updated', 'success');
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function deleteMenuAction(payload) {
  return (dispatch) => {
    deleteMenu(payload)
      .then((response) => {
        swal('Successful', 'Menu successfully deleted', 'success');
        return response.data;
      })
      .catch((error) => {
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
    updateCategoryMenu(payload)
      .then((response) => {
        setShowForm(false);
        resetForm();
        setSelectedItem(null);
        swal('Successful', 'Menu Category successfully updated', 'success');
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function deleteMenuCategoryAction(payload) {
  return (dispatch) => {
    deleteMenuCategory(payload)
      .then((response) => {
        swal('Successful', 'Menu category successfully deleted', 'success');
        return response.data;
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}