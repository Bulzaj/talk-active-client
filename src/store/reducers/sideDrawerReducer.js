import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isOpen: false
}

export const sideDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDE_DRAWER:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default: return state
  }
}


