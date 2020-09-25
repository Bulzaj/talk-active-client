import * as actionTypes from '../actions/actionTypes';

const initState = {
  stompClient: null,
  subscription: null,
  error: null
}

const websocketReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ON_CONNECT_SUCCESS:
      return {
        ...state,
        stompClient: action.stompClient,
        error: null
      }
    case actionTypes.ON_CONNECT_FAIL:
      return {
        ...state,
        stompClient: null,
        error: action.error
      }
    case actionTypes.ON_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        subscription: action.subscription
      }
    case actionTypes.ON_SUBSCRIBE_FAIL:
      return {
        ...state,
        subscription: null,
        error: action.error
      }
    default: return state
  }
}

export default websocketReducer;