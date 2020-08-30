import React from "react";

import styles from './Layout.module.css'
import Navbar from "../../components/navbar/Navbar";
import NavItem from "../../components/navbar/nav-item/NavItem";
import NavLink from "../../components/navbar/nav-link/NavLink";

import {faCoffee} from "@fortawesome/free-solid-svg-icons";

const Layout = props => {
  return (
    <div className={styles.Layout}>
      <nav>
        <Navbar>
          <NavItem>
            <NavLink
              icon={faCoffee}
              linkText='Login'
            />
          </NavItem>
          <NavItem>
            <NavLink
              icon={faCoffee}
              linkText='coffee'
            />
          </NavItem>
          <NavItem>
            <NavLink
              icon={faCoffee}
              linkText='coffee'
            />
          </NavItem>
        </Navbar>
      </nav>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;