import swal from 'sweetalert';
import { createStaff, deleteStaff, getCustomers, getDrivers, getSingleStaff, getStaff, updateStaff, 
  createDriver, updateDriver, deleteDriver, getSingleDriver } from '../../services/UserService';
import { spinner } from './AuthActions';
import FoodieAlert from '../../jsx/utils/alert';

export const GET_ALL_STAFF = '[get action] get all staff';
export const GET_ALL_CUSTOMERS = '[get action] get all customers';
export const GET_ALL_DRIVERS = '[get action] get all drivers';


///Staff Actions
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
        const errorMessage = error.response.data.message; 
        FoodieAlert.showError(errorMessage);
      });
  };
}

export function createStaffAction(payload, setShowForm, resetForm) {
  return (dispatch) => {
    createStaff(payload)
      .then((response) => {
        setShowForm(false);
        resetForm();
        FoodieAlert.showSuccess('Staff successfully created');
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        FoodieAlert.showError(errorMessage);
      });
  };
}

export function updateStaffAction(payload, setShowForm, resetForm, setSelectedItem) {
  return (dispatch) => {
    dispatch(spinner(true))
    updateStaff(payload)
      .then((response) => {
        dispatch(spinner(false))
        setShowForm(false);
        resetForm();
        setSelectedItem(null);
        FoodieAlert.showSuccess('Staff successfully updated');
      })
      .catch((error) => {
        console.log('error.response.data', error.response.data);
        
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        FoodieAlert.showError(errorMessage);
      });
  };
}

export function deleteStaffAction(payload) {
  return (dispatch) => {
    dispatch(spinner(true))
    deleteStaff(payload)
      .then((response) => {
        dispatch(spinner(false))
        FoodieAlert.showSuccess('Staff successfully deleted');
        return response.data;
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        FoodieAlert.showError(errorMessage);
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
      FoodieAlert.showError(errorMessage);
    });
}


///Driver Actions
export function getAllDrivers() {
  return (dispatch) => {
    dispatch(spinner(true))
    getDrivers()
      .then((response) => {
        dispatch(spinner(false))
        dispatch({
          type: GET_ALL_DRIVERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message; 
        FoodieAlert.showError(errorMessage);
      });
  };
}

export function createDriverAction(payload, setShowForm, resetForm) {
  return (dispatch) => {
    dispatch(spinner(true))
    createDriver(payload)
      .then((response) => {
        dispatch(spinner(false))
        setShowForm(false);
        resetForm();
        FoodieAlert.showSuccess('Staff successfully created');
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        FoodieAlert.showError(errorMessage);
      });
  };
}

export function updateDriverAction(payload, setShowForm, resetForm, setSelectedItem) {
  return (dispatch) => {
    dispatch(spinner(true))
    updateDriver(payload)
      .then((response) => {
        dispatch(spinner(false))
        setShowForm(false);
        resetForm();
        setSelectedItem(null);
        FoodieAlert.showSuccess('Staff successfully updated');
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        FoodieAlert.showError(errorMessage);
      });
  };
}

export function deleteDriverAction(payload) {
  return (dispatch) => {
    dispatch(spinner(true))
    deleteDriver(payload)
      .then((response) => {
        dispatch(spinner(false))
        FoodieAlert.showSuccess('Staff successfully deleted');
        return response.data;
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message;
        swal('Oops', errorMessage, 'error');
      });
  };
}

export async function getSingleDriverAction(id) {
  return getSingleDriver(id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const errorMessage = error.response.data.message;
      FoodieAlert.showError(errorMessage);
    });
}


///Customer Actions
export function getAllCustomers() {
  return (dispatch) => {
    dispatch(spinner(true))
    getCustomers()
      .then((response) => {
        dispatch(spinner(false))
        dispatch({
          type: GET_ALL_CUSTOMERS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(spinner(false))
        const errorMessage = error.response.data.message; 
        FoodieAlert.showError(errorMessage);
      });
  };
}