import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import authReducer from "./reducers/authReducer";
import {sideDrawerReducer} from "./reducers/sideDrawerReducer";
import usersReducer from "./reducers/userReducer";
import conversationReducer from "./reducers/conversationReducer";
import thunk from "redux-thunk";
import currentUserReducer from "./reducers/currentUserReducer";
import websocketReducer from "./reducers/websocketReducer";
import incognitoModeReducer from "./reducers/incognitoModeReducer";

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  conversation: conversationReducer,
  sideDrawer: sideDrawerReducer,
  currentUser: currentUserReducer,
  websocket: websocketReducer,
  incognitoMode: incognitoModeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = () => {
  return createStore(reducers,
    compose(
      applyMiddleware(thunk),
      composeEnhancers
    ));

}