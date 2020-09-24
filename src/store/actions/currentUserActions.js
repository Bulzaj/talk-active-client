import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import {USER_DETAILS_URL} from "../../utill/routes";

export const fetchCurrentUserSuccess = (username) => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
    username: username
  }
}

export const fetchCurrentUserFail = (error) => {
  return {
    type: actionTypes.FETCH_CURRENT_USER_FAIL,
    error: error
  }
}

export const fetchCurrentUser = (accessToken) => {
  return dispatch => {
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
    axios.get(USER_DETAILS_URL, config)
      .then(res => {
        dispatch(fetchCurrentUserSuccess(res.data.username));
      })
      .catch(err => {
        dispatch(fetchCurrentUserFail(err.message));
      })
  }
}