import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: []
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    default: return state
  }
}

export default usersReducer;