import {createStore} from "redux";
import auth from "./reducers/auth";

export const store = () => {
  return createStore(auth,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}