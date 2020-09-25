import React, {useEffect} from "react";
import keycloak from "../../keycloak/keycloak";
import {useDispatch, useSelector} from "react-redux";
import {authFail, authSuccess} from "../../store/actions/authActions";
import {fetchCurrentUser} from "../../store/actions/currentUserActions";
import {fetchUsersSuccess} from '../../store/actions/usersActions'
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import SideDrawer from "../../components/drawer/SideDrawer";
import {makeStyles} from "@material-ui/core/styles";
import Conversation from "../conversation/Conversation";
import {Route, useHistory} from "react-router-dom";
import SearchBox from "../../components/searchBox/SearchBox";
import axios from 'axios'
import {CONVERSATIONS_STORAGE_URL, KEYCLOAK_USERS_URL, WEBSOCKET_HANDSHAKE_URL} from "../../utill/routes";
import Box from "@material-ui/core/Box";
import Stomp from 'stompjs'
import {onConnectFail, onConnectSuccess, onSubscribeSuccess} from "../../store/actions/websocketActions";
import {addConversationToList, fetchConversationsList, fetchNewMessage} from "../../store/actions/conversationActions";

const useStyles = makeStyles(theme => (
  {
    root: {
      display: 'flex',
      height: '100%'
    },
    SearchBox: {
      // margin: 'auto'
    },
    Container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: 13
    }
  }
))

const Communicator = props => {

  const history = useHistory();
  const classes = useStyles();

  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);
  const accessToken = useSelector(state => state.auth.accessToken);
  const users = useSelector(state => state.users.users);
  const stompClient = useSelector(state => state.websocket.stompClient);
  const currentUser = useSelector(state => state.currentUser.username);
  const conversations = useSelector(state => state.conversation.conversations);
  const onFetchUsers = (users) => dispatch(fetchUsersSuccess(users));


  // authenticate
  useEffect(() => {
    keycloak
      .init({onLoad: 'login-required'})
      .then(authenticated => {
        dispatch(authSuccess(keycloak));
        dispatch(fetchCurrentUser(keycloak.token));
      })
      .catch(err => {
        dispatch(authFail());
        history.push('/')
      });
  }, []);


  // fetch users
  useEffect(() => {
    if (accessToken !== null) {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          // 'Access-Control-Request-Method': 'GET',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
        }
      }
      axios.get(KEYCLOAK_USERS_URL, config)
        .then(response => {
          onFetchUsers(response.data);
        })
        .catch(err => console.log(err));
    }
  }, [accessToken]);

  // connect and subscribe websocket
  useEffect(() => {
    if (authenticated && currentUser) {
      const ws = new WebSocket(WEBSOCKET_HANDSHAKE_URL);
      const stompClient = Stomp.over(ws);
      stompClient.connect({}, connect => {
        dispatch(onConnectSuccess(stompClient));
        if (currentUser) {
          let subscription = null;
          subscription = stompClient.subscribe(`/queue/reply/${currentUser}`, message => {
            const msgObj = JSON.parse(message.body);
            dispatch(fetchNewMessage(msgObj, currentUser));
            dispatch(addConversationToList(msgObj, currentUser));
          });
          dispatch(onSubscribeSuccess(subscription));
        }
      }, err => {
        dispatch(onConnectFail(err))
      })
    } else {
      if (stompClient) stompClient.disconnect();
    }
  }, [authenticated , currentUser]);

  // fetch conversations and messages
  useEffect(() => {
    if (authenticated) {
      dispatch(fetchConversationsList(accessToken));
    }
  }, [authenticated])

  const onChangeHandler = (event, value) => {
    if (value) history.push(props.match.path+`/to/${value.username}`)
  }

  let communicator = <CircularProgress />
  let tmpOptions = [{username: 'Loading...'}];
  if (authenticated) {
    if (users.length !== 0) {
      tmpOptions = users;
    }
    communicator = (
      <div className={classes.root}>
        <div>
          <SideDrawer contacts={conversations} />
        </div>

        <Container className={classes.Container}>
          <Box>
            <SearchBox
              className={classes.SearchBox}
              id='userSearchBox'
              options={tmpOptions}
              label = 'Talk to'
              optionLabel = {option => option.username}
              onChangeHandler={onChangeHandler}/>
          </Box>
          <Box flexGrow={1}>
            <Route path={props.match.path+`/to/:conversationId`} component={Conversation}/>
          </Box>
        </Container>
      </div>
    )
  }

  return (
    <div style={{height: '94vh'}}>
      {communicator}
    </div>
  )
}

export default Communicator;