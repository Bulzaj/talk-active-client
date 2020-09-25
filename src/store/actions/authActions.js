import * as actionTypes from './actionTypes';

export const authSuccess = (keycloakObj) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    accessToken: keycloakObj.token,
    logout: keycloakObj.logout
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}