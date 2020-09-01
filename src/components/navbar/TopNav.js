import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classes from './TopNav.module.css';

const TopNav = props => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TalkActive
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopNav;