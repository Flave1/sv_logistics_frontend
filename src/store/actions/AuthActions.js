//import { useNavigate } from "react-router-dom";
import { UserType } from '../../jsx/utils/constants';
import {
  formatError,
  getUserContext,
  login,
  runLogoutTimer,
  saveAccessTokenInSessionStorage,
  saveTokenDeatailInLocalStorage,
  saveTokenInLocalStorage,
  signUp,
} from '../../services/AuthService';
import swal from 'sweetalert';

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const GENERATE_TEMP_ID = '[GENERATE_TEMP_ID] temp id';
export const SPIN = '[SPIN] spin';
export const SET_MENU = '[SET_MENU] set menu';

export function signupAction(email, password, navigate) {
  return (dispatch) => {
    signUp(email, password)
      .then((response) => {
        saveTokenInLocalStorage(response.data);
        runLogoutTimer(
          dispatch,
          response.data.expiresIn * 1000,
          //history,
        );
        dispatch(confirmedSignupAction(response.data));
        navigate('/dashboard');
        //history.push('/dashboard');
      })
      .catch((error) => {
        const errorMessage = formatError(error.response.data);
        dispatch(signupFailedAction(errorMessage));
      });
  };
}

export function Logout(navigate) {
  localStorage.removeItem('userDetails');
  localStorage.removeItem('token');
  navigate('/login');
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
            setUserMenu(context.data.permissions)(dispatch);
            saveTokenDeatailInLocalStorage(context.data);
            runLogoutTimer(dispatch, context.data.expiresIn * 1000, navigate);
            dispatch(loginConfirmedAction(context.data));
            if (context.data.userTypeId === UserType.Staff) {
              navigate('/main-dashboard');
            } else {
              navigate('/shops');
            }
          });
        });
      })
      .catch((error) => {
        const errorMessage = error.response.data.message; //formatError(error.response.data);
        swal('Oops', errorMessage, 'error');
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
export function generateTemporalId() {
  return (dispatch) => {
    dispatch({
      type: GENERATE_TEMP_ID,
    });
  };
}

export function setUserMenu(menuList) {
  return (dispatch) => {
    dispatch({
      type: SET_MENU,
      payload: menuList,
    });
  };
}

export function spinner(spin) {
  return { type: SPIN, payload: spin };
}
