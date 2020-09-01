import * as actionTypes from '../actions/actionTypes';

const initState = {
  authenticated: false
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true
      }
    default: return state
  }
}

export default authReducer;