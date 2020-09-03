import React, {useEffect} from "react";
import keycloak from "../../keycloak/keycloak";
import {useDispatch, useSelector} from "react-redux";
import {authSuccess} from "../../store/actions/authActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import SideDrawer from "../../components/drawer/SideDrawer";

import {makeStyles} from "@material-ui/core/styles";
import Conversation from "../../containers/conversation/Conversation";
import {Route, withRouter} from "react-router-dom";

const useStyles = makeStyles(theme => (
  {
    root: {
      display: 'flex'
    }
  }
))

const Communicator = props => {

  const tmpContacts = [
    {username: 'tester1', userId:1},
    {username: 'tester2', userId:2},
    {username: 'tester3', userId:3},
    {username: 'tester4', userId:4}
  ]

  const classes = useStyles();

  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);
  const onUserAuthenticated = () => dispatch(authSuccess());


  useEffect(() => {
    console.log(props.match)
    keycloak
      .init({onLoad: 'login-required'})
      .then(authenticated => {
        onUserAuthenticated();
        console.log(keycloak)
       })
  }, [keycloak]);

  let communicator = <CircularProgress />
  if (authenticated) {
    communicator = (
      <div className={classes.root}>
        <SideDrawer contacts={tmpContacts} />
        <Route path={props.match.path+`/to/:conversationId`} component={Conversation}/>
      </div>
    )
  }

  return (
    <div>
      {communicator}
    </div>
  )
}

export default Communicator;