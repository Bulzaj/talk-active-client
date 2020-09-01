import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import {sideDrawerReducer} from "./reducers/sideDrawerReducer";

const reducers = combineReducers({
  auth: authReducer,
  sideDrawer: sideDrawerReducer
})

export const store = () => {
  return createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}