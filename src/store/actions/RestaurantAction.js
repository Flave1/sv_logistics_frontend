import { createRestaurant, deleteRestaurant, getAllRestaurants, updateRestaurant, createQrCode } from "../../services/RestaurantService";
import swal from 'sweetalert';

export const GET_ALL_RESTAURANT = '[GET_ALL_CLIENT] get all restaurants';
///Menu Actions
export function getAllRestaurantsAction() {
return (dispatch) => {
    getAllRestaurants()
        .then((response) => {
        dispatch({
            type: GET_ALL_RESTAURANT,
            payload: response.data,
        });
        })
        .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
        });
    };
}

export function createRestaurantAction(payload, setShowForm, resetForm) {
    return (dispatch) => {
        createRestaurant(payload)
        .then((response) => {
          setShowForm(false);
          resetForm();
          swal('Successful', 'Restaurant successfully created', 'success');
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }

  export function updateRestaurantAction(payload, setShowForm, resetForm, setSelectedItem) {
    return (dispatch) => {
        updateRestaurant(payload)
        .then((response) => {
          setShowForm(false);
          resetForm();
          setSelectedItem(null);
          swal('Successful', 'Restaurant successfully updated', 'success');
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }

  export function deleteRestaurantAction(payload) {
    return (dispatch) => {
      deleteRestaurant(payload)
        .then((response) => {
          swal('Successful', 'Restaurant successfully deleted', 'success');
          return response.data;
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }

  export function CreateQrCodeAction(payload) {
    return (dispatch) => {
      createQrCode(payload)
        .then((response) => {
          swal('Successful', 'QrCode successfully created', 'success');
          return response.data;
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }