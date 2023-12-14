import swal from 'sweetalert';
import { createStaff, deleteStaff, getCustomers, getDrivers, getSingleStaff, getStaff, updateStaff } from '../../services/UserService';
import { loginFailedAction } from './AuthActions';

export const GET_ALL_STAFF = '[get action] get all staff';
export const GET_ALL_CUSTOMERS = '[get action] get all customers';
export const GET_ALL_DRIVERS = '[get action] get all drivers';

export function getAllStaff() {
  return (dispatch) => {
    getStaff()
      .then((response) => {
        dispatch({
          type: GET_ALL_STAFF,
          payload: response.data,
        });
      })
      .catch((error) => {
        const errorMessage = error.response.data.message; //formatError(error.response.data);
        swal('Oops', errorMessage, 'error');
        dispatch(loginFailedAction(errorMessage));
      });
  };
}

export function getAllDrivers() {
  return (dispatch) => {
    getDrivers()
      .then((response) => {
        dispatch({
          type: GET_ALL_DRIVERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const errorMessage = error.response.data.message; //formatError(error.response.data);
        swal('Oops', errorMessage, 'error');
        dispatch(loginFailedAction(errorMessage));
      });
  };
}

export function getAllCustomers() {
  return (dispatch) => {
    getCustomers()
      .then((response) => {
        dispatch({
          type: GET_ALL_CUSTOMERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const errorMessage = error.response.data.message; //formatError(error.response.data);
        swal('Oops', errorMessage, 'error');
        dispatch(loginFailedAction(errorMessage));
      });
  };
}

export function createStaffAction(payload, setShowForm, resetForm) {
  return (dispatch) => {
    createStaff(payload)
      .then((response) => {
        setShowForm(false);
        resetForm();
        swal('Successful', 'Staff successfully created', 'success');
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function updateStaffAction(payload, setShowForm, resetForm, setSelectedItem) {
  return (dispatch) => {
    updateStaff(payload)
      .then((response) => {
        setShowForm(false);
        resetForm();
        setSelectedItem(null);
        swal('Successful', 'Staff successfully updated', 'success');
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export function deleteStaffAction(payload) {
  return (dispatch) => {
    deleteStaff(payload)
      .then((response) => {
        swal('Successful', 'Staff successfully deleted', 'success');
        return response.data;
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export async function getSingleStaffAction(id) {
  return getSingleStaff(id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      swal('Oops', errorMessage, 'error');
    });
}
