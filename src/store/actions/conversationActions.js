import * as actionTypes from './actionTypes';
import axios from 'axios';
import {CONVERSATIONS_STORAGE_URL} from "../../utill/routes";

export const contactSelectedSuccess = (contact) => {
  return {
    type: actionTypes.CONTACT_SELECTED_SUCCESS,
    selectedContact: contact
  }
}

export const contactSelectedFail = (error) => {
  return {
    type: actionTypes.CONTACT_SELECTED_FAIL,
    error: error
  }
}

const fetchConversationsListFail = (err) => {
  return {
    type: actionTypes.FETCH_CONVERSATIONS_LIST_FAIL,
    error: err
  }
}

const fetchConversationsListSuccess = (conversations) => {
  return {
    type: actionTypes.FETCH_CONVERSATIONS_LIST_SUCCESS,
    conversations: conversations
  }
}

const clearConversationsList = () => {
  return {
    type: actionTypes.CLEAR_CONVERSATIONS_LIST
  }
}

export const fetchConversationsList = (accessToken) => {
  return dispatch => {
    dispatch(clearConversationsList())
    const config = {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      }
    }
    axios.get(CONVERSATIONS_STORAGE_URL, config)
      .then(response => {
        console.log(response)
        dispatch(fetchConversationsListSuccess(response.data.conversationsParticipants));
      })
      .catch(err => dispatch(fetchConversationsListFail(err.body)));
  }
}

export const fetchNewMessage = (msgObj, currentUser) => {
  return {
    type: actionTypes.FETCH_NEW_MESSAGE,
    msgObj: msgObj,
    currentUser: currentUser
  }
}

export const clearMessagesList = () => {
  return {
    type: actionTypes.CLEAR_MESSAGES_LIST
  };
}

export const addMessagesToList = (messages) => {
  return {
    type: actionTypes.ADD_MESSAGES_TO_LIST,
    messages: messages
  }
}

export const addConversationToList = (msgObj, currentUser) => {
  return {
    type: actionTypes.ADD_CONVERSATION_TO_LIST,
    msgObj: msgObj,
    currentUser: currentUser
  }
}

export const fetchMessagesList = (conversationMember, accessToken) => {
  return dispatch => {
    dispatch(clearMessagesList());
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
    axios.get(CONVERSATIONS_STORAGE_URL + `messages/${conversationMember}`, config)
      .then(response => {
        console.log(response.data)
        dispatch(addMessagesToList(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
}