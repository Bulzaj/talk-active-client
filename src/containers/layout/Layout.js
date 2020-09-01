import React from "react";
import styles from './Layout.module.css'
import TopNav from "../../components/navbar/TopNav";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout = props => {

  return (
    <div className={styles.root}>
      <CssBaseline />
      <nav>
        <TopNav />
      </nav>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;