import * as actionTypes from './actionTypes';

export const onConnectSuccess = (stompClient) => {
  return {
    type: actionTypes.ON_CONNECT_SUCCESS,
    stompClient: stompClient
  }
}

export const onConnectFail = (err) => {
  return {
    type: actionTypes.ON_CONNECT_FAIL,
    error: err
  }
}

export const onSubscribeSuccess = (subscription) => {
  return {
    type: actionTypes.ON_SUBSCRIBE_SUCCESS,
    subscription: subscription
  }
}

//todo: handle on subscribe fail
export const onSubscribeFail = (err) => {
  return {
    type: actionTypes.ON_SUBSCRIBE_FAIL,
    error: err
  }
}