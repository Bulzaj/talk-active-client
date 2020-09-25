import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedContact: null,
  conversations: [],
  messages: [],
  error: null
}

const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_SELECTED_SUCCESS:
      return {
        ...state,
        selectedContact: action.selectedContact,
        error: null
      }
    case actionTypes.CONTACT_SELECTED_FAIL:
      return {
        ...state,
        selectedContact: null,
        error: action.error
      }
    case actionTypes.FETCH_NEW_MESSAGE:
      if (action.msgObj.senderName === action.currentUser) {
        return {
          ...state,
          messages: state.messages.concat(action.msgObj)
        }
      }
      if (state.selectedContact === action.msgObj.senderName){
        console.log('if runs')
        return {
          ...state,
          messages: state.messages.concat(action.msgObj)
        }
      }
      return state;
    case actionTypes.CLEAR_MESSAGES_LIST:
      return {
        ...state,
        messages: []
      }
    case actionTypes.ADD_MESSAGES_TO_LIST:
      return {
        ...state,
        messages: state.messages.concat(action.messages)
      }
    case actionTypes.ADD_CONVERSATION_TO_LIST:
      if (action.msgObj.senderName === action.currentUser) {
        if (!state.conversations.includes(action.msgObj.receiverName)) {
          return {
            ...state,
            conversations: state.conversations.concat(action.msgObj.receiverName)
          }
        }
      } else {
        if (!state.conversations.includes(action.msgObj.senderName)) {
          return {
            ...state,
            conversations: state.conversations.concat(action.msgObj.senderName)
          }
        }
      }
      return state;
    case actionTypes.FETCH_CONVERSATIONS_LIST_SUCCESS:
      return {
        ...state,
        conversations: action.conversations,
        error: null
      }
    default: return state;
  }
}

export default conversationReducer;