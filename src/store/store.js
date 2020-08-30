import {createStore} from "redux";

export const store = (reducers) => {
  return createStore(reducers);
}