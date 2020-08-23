import React from "react";
import styles from './NavLink.module.css'

const NavLink = props => {
  return (
    <a href='#' className={styles.NavLink}>
      {props.svgImage}
      <span>{props.linkText}</span>
    </a>
  )
}

export default NavLink;