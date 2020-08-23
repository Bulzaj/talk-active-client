import React, {useState} from "react";
import styles from './Navbar.module.css';

const Navbar = props => {

  const [navbarHoverState, setNavbarHoverState] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        {props.children}
      </ul>
    </nav>
  );
}

export default Navbar;