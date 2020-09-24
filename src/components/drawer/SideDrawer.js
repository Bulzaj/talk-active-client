import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import {useSelector, useDispatch} from "react-redux";
import {Divider, Hidden, List, Toolbar} from "@material-ui/core";
import {toggleSideDrawer} from "../../store/actions/sideDrawerActions";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const sideDrawerWidth = 233;

const useStyles = makeStyles(theme => (
  {
    drawer: {
      width: sideDrawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: sideDrawerWidth
    },
  }
));

const SideDrawer = props => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.sideDrawer.isOpen);
  const history = useHistory();

  const classes = useStyles();

  const handleDrawerToggle = () => {
    return dispatch(toggleSideDrawer());
  }

  const handleConversationClick = (conversationName) => {
    console.log(conversationName);
    history.push('/talk/to/'+conversationName);
  }

  const conversationsList = (
    <div>
      <List>
        {props.contacts.map(conversation => (
          <ListItem
            button
            key={conversation.conversationName}
            onClick={() => handleConversationClick(conversation.conversationName)}
          >
            <ListItemText
              primary={conversation.conversationName}
              key={conversation.conversationName}
            />
            {conversation.isRead ? null : <MailOutlineIcon />}
          </ListItem>
        ))}
      </List>
    </div>
  )
  //
  // const list = (
  //   <List>
  //   props.contacts.map(contact => (
  //       <ListItem button key={contact.userId}>
  //         <ListItemText primary={contact.username} key={contact.userId}/>
  //       </ListItem>
  //   ))
  //   </List>
  // )

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
          {conversationsList}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{paper: classes.drawerPaper}}
          className={classes.drawer}
          open
          variant='permanent'>
          <Toolbar />
          {conversationsList}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default SideDrawer;