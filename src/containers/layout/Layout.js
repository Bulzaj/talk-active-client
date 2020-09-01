import React from "react";
import styles from './Layout.module.css'
import TopNav from "../../components/navbar/TopNav";

const Layout = props => {
  return (
    <div className={styles.Layout}>
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