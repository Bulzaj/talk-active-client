import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './NavLink.module.css'

const NavLink = props => {
  return (
    <React.Fragment>
      <FontAwesomeIcon icon='coffee'/>
      <a href='#' className={styles.NavLink}>
        <FontAwesomeIcon icon={props.icon}/>
        <span>{props.linkText}</span>
      </a>
    </React.Fragment>
  )
}

export default NavLink;