import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from "../layout/Layout";

import styles from './App.module.css'
import Home from "../../pages/home/Home";
import Communicator from "../../pages/communicator/Communicator";

function App() {

  let routes = (
    <Switch>
      <Route path='/talk' component={Communicator}/>
      <Route path='/' exact component={Home}/>
    </Switch>
  )

  return (
    <div className={styles.App}>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;
