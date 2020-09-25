import * as actionTypes from '../actions/actionTypes';

const initState = {
  authenticated: false,
  accessToken: null,
  logout: null,
  error: null
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        accessToken: action.accessToken,
        logout: action.logout,
        error: null
      }
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        authenticated: false,
        error: action.error,
        accessToken: null,
        logout: null
      }
    default: return state
  }
}

export default authReducer;