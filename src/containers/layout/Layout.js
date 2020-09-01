import React from "react";

import styles from './Layout.module.css'

const Layout = props => {
  return (
    <div className={styles.Layout}>
      <nav>

      </nav>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;