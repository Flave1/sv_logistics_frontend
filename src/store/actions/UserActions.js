import swal from "sweetalert";
import { getCustomers, getDrivers, getStaff } from "../../services/UserService";
import { loginFailedAction } from "./AuthActions";

export const GET_ALL_STAFF = "[get action] get all staff";
export const GET_ALL_CUSTOMERS = "[get action] get all customers";
export const GET_ALL_DRIVERS = "[get action] get all drivers";

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
        swal("Oops", errorMessage, "error");
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
        swal("Oops", errorMessage, "error");
        dispatch(loginFailedAction(errorMessage));
      });
  };
};

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
        swal("Oops", errorMessage, "error");
        dispatch(loginFailedAction(errorMessage));
      });
  };
};