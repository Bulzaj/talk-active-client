import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PeopleIcon from '@material-ui/icons/People'

import {toggleSideDrawer} from "../../store/actions/sideDrawerActions";
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => (
  {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      // [theme.breakpoints.up('sm')]: {
      //   width: 240,
      //   flexShrink: 0
      // }
    },
    menuButton: {
      marginRight: theme.spacing(2)
    }
  }
))

const TopNav = props => {

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleOnclick = () => {
    return dispatch(toggleSideDrawer());
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              edge='start'
              onClick={handleOnclick}>
              <PeopleIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap className={classes.title}>
            TalkActive
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopNav;