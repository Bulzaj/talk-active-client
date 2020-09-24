import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import {
  KEYCLOAK_USERS_URL
} from "../../utill/routes";
import {useDispatch, useSelector} from "react-redux";
import {contactSelectedFail, contactSelectedSuccess, fetchMessagesList} from "../../store/actions/conversationActions";
import {CardContent, Container, Divider, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import Card from "@material-ui/core/Card";
import {useTheme} from "@material-ui/core";

const useStyles = makeStyles(theme => (
  {
    conversationBox: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    conversationHistory: {
      paddingTop: 13
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    messageBox: {
      display: 'flex',
      flexDirection: 'column',
      margin: 8
    }
  }
));

const Conversation = props => {

  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const userParam = useParams();

  const accessToken = useSelector(state => state.auth.accessToken);
  const selectedContact = useSelector(state => state.conversation.selectedContact);
  const currentUser = useSelector(state => state.currentUser.username);
  const stompClient = useSelector(state => state.websocket.stompClient);
  const messages = useSelector(state => state.conversation.messages);

  const dispatch = useDispatch();
  const [messageBody, setMessageBody] = useState('');

  // select contact
  useEffect(() => {
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
    axios.get(KEYCLOAK_USERS_URL+`?username=${userParam.conversationId}`, config)
      .then(response => {
        const selectedContact = response.data[0].username;
        if (selectedContact === currentUser) {
          history.push('/talk');
          dispatch(contactSelectedFail('you cant write to yourself'));
        }
        else if (response.data.length !== 1) history.push('/talk');
        else dispatch(contactSelectedSuccess(selectedContact))
      })
      .catch(err => {
        history.push('/talk');
      })
  }, [userParam.conversationId]);

  // fetch messages
  useEffect(() => {
    if (selectedContact && accessToken) {
      dispatch(fetchMessagesList(selectedContact, accessToken));
    }
  }, [selectedContact, accessToken])

  const handleSendMessage = event => {
    event.preventDefault();
    const message = {
      messageBody: messageBody,
      senderName: currentUser,
      receiverName: selectedContact,
      messageType: 'NORMAL',
      createdAt: Date.now()
    };
    if (stompClient) stompClient.send('/app/send', {accessToken: accessToken}, JSON.stringify(message));
    setMessageBody('');
  }

  const handleTextFieldChange = (event) => {
    setMessageBody(event.target.value);
  }

  let messageInput = null;
  if (selectedContact) {
    messageInput = (
        <form onSubmit={handleSendMessage} className={classes.formContainer}>
          <TextField
            id='messageInput'
            label='Enter message here'
            onChange={handleTextFieldChange}
            value={messageBody}
            fullWidth/>
          <Button
            variant='contained'
            type='submit'
            color='primary'
            endIcon={<SendIcon />}>
            SEND
          </Button>
        </form>
    )
  }
  let conversationOutput = null;
  if (messages.length !== 0) {
    conversationOutput = messages.map(msg => {
      const messageObj = {
        messageBody: msg.messageBody,
        senderName: msg.senderName,
        createdAt: msg.createdAt
      }
      let style = null;
      if (messageObj.senderName === currentUser) {
        style = {
          backgroundColor: theme.palette.info.main,
          color: "white"
        }
      }
      return (
        <Box className={classes.messageBox} boxShadow={2}>
          <Card>
            <CardContent style={style}>
              <Typography variant='body1'>{messageObj.messageBody}</Typography>
              <Divider />
              <Typography variant='caption'>
                {messageObj.senderName} {new Date(messageObj.createdAt).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )
    })
  }
  // if (messages.length !== 0 && accessToken) {
  //   console.log(messages.length)
  //   console.log(messages)
  //   const messageObj = messages.map(msg => {
  //     // return JSON.parse(msg);
  //   })
  //   const filtered = messageObj.filter(msg => msg.receiverName === selectedContact);
  //   conversationOutput = filtered.map(msg => {
  //     return (
  //       <Box className={classes.messageBox}>
  //         <Card>
  //           <CardContent>
  //             <Typography>{msg.messageBody}</Typography>
  //           </CardContent>
  //         </Card>
  //       </Box>
  //     )
  //   })
  // }

  return (
      <Container className={classes.conversationBox}>
        <Box className={classes.conversationHistory} flexGrow={1}>
          {conversationOutput}
        </Box>
        <Box>
          {messageInput}
        </Box>
      </Container>
  )
}

export default Conversation;