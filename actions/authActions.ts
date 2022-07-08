import axios from 'axios';
import { API_ENDPOINT } from '../constants/Api';

import { handleMessage } from './commonAction';

import { AsyncStorage } from 'react-native';

// Define Action Types
export const AUTH_LOGIN_USER_REQUEST = 'AUTH_LOGIN_USER_REQUEST';
export const AUTH_LOGIN_USER_FAILURE = 'AUTH_LOGIN_USER_FAILURE';
export const AUTH_LOGIN_USER_SUCCESS = 'AUTH_LOGIN_USER_SUCCESS';
export const AUTH_LOGOUT_USER = 'AUTH_LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const VALIDATE_USER = 'VALIDATE_USER';
export const SENT_VERIFICTION_CODE = 'SENT_VERIFICTION_CODE';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const AUTH_UPDATE_USER_INFO = 'AUTH_UPDATE_USER_INFO';
export const SET_ACCOUNT_INFO = 'SET_ACCOUNT_INFO';
export const RESET_REGISTER_FLAG = 'RESET_REGISTER_FLAG';
export const SET_TOKEN_INFO = 'SET_TOKEN_INFO';
export const STRIPE_LINK = 'STRIPE_LINK';
export const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';
// End of Action Types

export function authLoginUserSuccess(token: string, user: any) {
  return {
    type: AUTH_LOGIN_USER_SUCCESS,
    token,
    user,
  };
}

export function authRegisterSuccess() {
  return {
    type: REGISTER_USER,
  }
}

export function authLoginUserRequest() {
  return {
    type: AUTH_LOGIN_USER_REQUEST,
  };
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT_USER,
  };
}

export function resetSentLinkSuccess() {
  return {
    type: RESET_PASSWORD,
  };
}

export function stripeLink(url: string) {
  return {
    type: STRIPE_LINK,
    url
  }
}


export function updatePasswordSuccess() {
  return {
    type: UPDATE_PASSWORD,
  };
}

export function authUpdateUserInfo(user: any) {
  return {
    type: AUTH_UPDATE_USER_INFO,
    user,
  };
}

export function authLogoutAndRedirect() {
  return async (dispatch: any, getState: any) => {
    const token = getState().auth.token;
    try {
      const res = await axios({
        headers: {
          Authorization: `Bearer ${token}`
        },
        method: 'post',
        url: `${API_ENDPOINT}/users/auth/logout`,
      });
      if (res.status === 200) {
        dispatch(authLogout());
        return Promise.resolve(); 
      }
    } catch (error: any) {
      // dispatch(handleMessage(true, 'error', 'There are something wrong in logout.'));
      console.log(error);
    }
    
  };
}

export const updatePassword = (
  email: string,
  validation_token: string,
  password: string,
  password_confirmation: string
) => {
  return async (dispatch: any) => {
    const payload = {
      email: email,
      validation_token: validation_token,
      password: password,
      password_confirmation: password_confirmation
    };

    console.log(payload);

    try {
      const res = await axios({
        method: 'post',
        url: `${API_ENDPOINT}/users/auth/password/update`,
        data: payload,
      });
      if (res.status === 200) {
        console.log(res);
        dispatch(updatePasswordSuccess());
      } else {
        console.log(res);
        dispatch(handleMessage(true, 'error', res.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(handleMessage(true, 'error', 'You failed to update your password.'));
    }
  };
};

export const setAccountInfo = (accountInfo: any) => {
  return {
    type: SET_ACCOUNT_INFO,
    accountInfo
  };
}

export const resetRegisterFlag = () => {
  return {
    type: RESET_REGISTER_FLAG    
  };
}

export const setTokenInfo = (tokenInfo: any) => {
  return {
    type: SET_TOKEN_INFO,
    tokenInfo
  };
}

export const clearAuthState = () => {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

