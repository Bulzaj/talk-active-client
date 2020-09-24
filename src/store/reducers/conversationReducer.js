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
      return {
        ...state,
        messages: state.messages.concat(action.message)
      }
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
      if (!state.conversations.some(c => c.conversationName !== action.conversationName)) {
        // const conversationObj = {
        //   conversationName: action.conversationName,
        //   isRead: false
        // }
        return {
          ...state,
          conversations: state.conversations.concat(action.conversationName)
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