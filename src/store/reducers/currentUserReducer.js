import * as actionTypes from '../actions/actionTypes';

const initialState = {
  username: null,
  error: null,
}

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        username: action.username,
        error: null
      }
    case actionTypes.FETCH_CURRENT_USER_FAIL:
      return {
        ...state,
        username: null,
        error: action.error
      }
    default: return state;
  }
}

export default currentUserReducer;

