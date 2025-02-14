import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cssVariables.css';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';
import {store} from "./store/store";
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store()}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
