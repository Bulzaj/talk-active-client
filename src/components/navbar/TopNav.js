import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Hidden, Menu} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

import {toggleSideDrawer} from "../../store/actions/sideDrawerActions";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Route, useHistory} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import SwitchControl from "../switchControl/SwitchControl";
import {incognitoModeChanged} from "../../store/actions/incognitoModeActions";
import CloudOffIcon from '@material-ui/icons/CloudOff';

const useStyles = makeStyles(theme => (
  {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }
))

const TopNav = props => {

  const dispatch = useDispatch();

  const classes = useStyles();
  const authenticated = useSelector(state => state.auth.authenticated);
  const logout = useSelector(state => state.auth.logout);
  const currentUser = useSelector(state => state.currentUser.username);
  const isIncognitoMode = useSelector(state => state.incognitoMode.isIncognitoMode);

  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleSideDrawerButtonOnClick = () => {
    return dispatch(toggleSideDrawer());
  }

  const handlerIncognitoButtonClicked = () => {
    dispatch(incognitoModeChanged());
  }

  const handleMenuOnOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuOnClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    history.push('/')
    logout();
  }

  const contactsSideDrawer = (
    <Route path='/talk'>
      <Hidden smUp>
        <IconButton
          className={classes.menuButton}
          color='inherit'
          edge='start'
          onClick={handleSideDrawerButtonOnClick}>
          <PeopleIcon />
        </IconButton>
      </Hidden>
    </Route>
  );

  let profileButton = null
  if (authenticated && currentUser) {
    profileButton = (
      <div>
        {isIncognitoMode? (
          <IconButton
          color='inherit'
          edge='start'
          onClick={handlerIncognitoButtonClicked}>
          <CloudOffIcon />
          </IconButton>
          ) : null}
        <IconButton
          color='inherit'
          edge='end'
          onClick={handleMenuOnOpen}>
          <SettingsIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuOnClose}>
          <MenuItem disabled={true}>{currentUser}</MenuItem>
          <MenuItem>
            <SwitchControl
              name='incognitoModeCheck'
              label='Incognito Mode'
              />
          </MenuItem>
          <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
        </Menu>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {contactsSideDrawer}
          <Typography variant="h6" noWrap className={classes.title}>
            TalkActive
          </Typography>
          {profileButton}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopNav;