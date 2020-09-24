import React from "react";
import styles from './Layout.module.css'
import TopNav from "../../components/navbar/TopNav";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Toolbar} from "@material-ui/core";

const Layout = props => {

  return (
    <div className={styles.root}>
      <CssBaseline />
      <nav>
        <TopNav />
      </nav>
      <main className='clasclas'>
        <Toolbar />
        {props.children}
      </main>
    </div>
  )
}

export default Layout;