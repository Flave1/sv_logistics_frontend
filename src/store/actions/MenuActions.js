import { getRestaurantMenuCategories, createMenuCategory } from "../../services/MenuService";
import swal from 'sweetalert';

export const GET_ALL_RESTAURANT_MENU_CATEGORIES = '[get action] get all restaurant menu categories';

///Menu Actions
export function getMenuCategories() {
    return (dispatch) => {
        getRestaurantMenuCategories()
        .then((response) => {
          dispatch({
            type: GET_ALL_RESTAURANT_MENU_CATEGORIES,
            payload: response.data.data,
          });
        })
        .catch((error) => {
          const errorMessage = error.response.data.message; //formatError(error.response.data);
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