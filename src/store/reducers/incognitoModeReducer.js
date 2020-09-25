import {INCOGNITO_MODE_CHANGED} from "../actions/actionTypes";

const initialState = {
  isIncognitoMode: false
}

const incognitoModeReducer = (state= initialState, action) => {
  switch (action.type) {
    case INCOGNITO_MODE_CHANGED:
      return {
        ...state,
        isIncognitoMode: !state.isIncognitoMode
      }
    default: return state;
  }

}

export default incognitoModeReducer;