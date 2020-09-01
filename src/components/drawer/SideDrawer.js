import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import {useSelector, useDispatch} from "react-redux";
import {Divider, Hidden, List, Toolbar} from "@material-ui/core";
import {toggleSideDrawer} from "../../store/actions/sideDrawerActions";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";

const sideDrawerWidth = 233;

const useStyles = makeStyles(theme => (
  {
    drawer: {
      width: sideDrawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: sideDrawerWidth
    }
  }
));

const SideDrawer = props => {

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.sideDrawer.isOpen);

  const classes = useStyles();

  const handleDrawerToggle = () => {
    return dispatch(toggleSideDrawer());
  }

  const list = (
    props.contacts.map(contact => (
      <List>
        <ListItem button key={contact.userId}>
          <ListItemText primary={contact.username} key={contact.userId}/>
        </ListItem>
      </List>
    )))

  return (
    <div>
      <Hidden smUp>
        <Drawer
          classes={{paper: classes.drawerPaper}}
          className={classes.drawer}
          anchor={'left'}
          open={isOpen}
          onClose={handleDrawerToggle}
          variant='temporary'>
          <Divider />
          {list}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{paper: classes.drawerPaper}}
          className={classes.drawer}
          open
          variant='permanent'>
          <Toolbar />
          {list}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default SideDrawer;