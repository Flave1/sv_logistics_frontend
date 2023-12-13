//import { useNavigate } from "react-router-dom";

import { ref } from "valtio";
import {
  formatError,
  getUserContext,
  login,
  runLogoutTimer,
  saveAccessTokenInSessionStorage,
  saveTokenDeatailInLocalStorage,
  saveTokenInLocalStorage,
  signUp,
  createStaff
} from "../../services/AuthService";
import swal from "sweetalert";

export const SIGNUP_CONFIRMED_ACTION = "[signup action] confirmed signup";
export const SIGNUP_FAILED_ACTION = "[signup action] failed signup";
export const LOGIN_CONFIRMED_ACTION = "[login action] confirmed login";
export const LOGIN_FAILED_ACTION = "[login action] failed login";
export const LOADING_TOGGLE_ACTION = "[Loading action] toggle loading";
export const LOGOUT_ACTION = "[Logout action] logout action";
export const CREATE_STAFF_CONFIRMED_ACTION = "[staff action] create staff success";
export const CREATE_STAFF_FAILED_ACTION = "[staff action] create staff failed";
export const CREATE_STAFF_LOADING_ACTION = "[staff action] create staff loading";

export function signupAction(email, password, navigate) {
  return (dispatch) => {
    signUp(email, password)
      .then((response) => {
        saveTokenInLocalStorage(response.data);
        runLogoutTimer(
          dispatch,
          response.data.expiresIn * 1000
          //history,
        );
        dispatch(confirmedSignupAction(response.data));
        navigate("/dashboard");
        //history.push('/dashboard');
      })
      .catch((error) => {
        const errorMessage = formatError(error.response.data);
        dispatch(signupFailedAction(errorMessage));
      });
  };
}

export function Logout(navigate) {
  localStorage.removeItem("userDetails");
  navigate("/login");
  return {
    type: LOGOUT_ACTION,
  };
}

export function loginAction(email, password, navigate) {
  return (dispatch) => {
    login(email, password)
      .then((response) => {
        saveAccessTokenInSessionStorage(response.data.access_token).then(() => {
          getUserContext().then((context) => {
            runLogoutTimer(dispatch, context.data.expiresIn * 1000, navigate);
            saveTokenDeatailInLocalStorage(context.data);
            dispatch(loginConfirmedAction(context.data));
            navigate("/main-dashboard");
          });
        });
      })
      .catch((error) => {
        const errorMessage = error.response.data.message; //formatError(error.response.data);
        swal("Oops", errorMessage, "error");
        dispatch(loginFailedAction(errorMessage));
      });
  };
}

export function loginFailedAction(data) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: data,
  };
}

export function loginConfirmedAction(data) {
  return {
    type: LOGIN_CONFIRMED_ACTION,
    payload: data,
  };
}

export function confirmedSignupAction(payload) {
  return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
  };
}

export function signupFailedAction(message) {
  return {
    type: SIGNUP_FAILED_ACTION,
    payload: message,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}

export function createStaffConfirmedAction(data) {
  return {
    type: CREATE_STAFF_CONFIRMED_ACTION,
    payload: data,
  };
}

export function createStaffFailedAction(data) {
  return {
    type: CREATE_STAFF_FAILED_ACTION,
    payload: data,
  };
}

export function createStaffAction (payload, navigate) {
  return (dispatch) => {
    createStaff(payload)
    .then((response) => {
      swal("Successful", "Staff successfully created", "success");
      dispatch(createStaffConfirmedAction("Staff successfully created"));
    })
    .catch((error) => {
      const errorMessage = formatError(error.response.data);
      swal("Oops", errorMessage, "error");
      dispatch(createStaffFailedAction(errorMessage));
    });
};
}