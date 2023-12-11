import swal from "sweetalert";
import { getStaff } from "../../services/UserService";
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
