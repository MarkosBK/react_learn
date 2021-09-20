import avatar from '../logo.svg';

const UPDATE_NEW_MESSAGE_CONTENT = 'UPDATE-NEW-MESSAGE-CONTENT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsDataInit = {
    contacts: [
      {username: 'Markos Basilio', avatar: avatar, userlogin: 'markosbasilio'},
      {username: 'Anton Rynkovoy', avatar: avatar, userlogin: 'antonrynkoboy'},
      {username: 'Alexandr Bandurko', avatar: avatar, userlogin: 'alexandr'},
      {username: 'Ivan Raschehmarov', avatar: avatar, userlogin: 'raschehmarov'},
    ],
    messages: [
      {userlogin: 'markosbasilio', text: 'Hello my friend'},
      {userlogin: 'antonrynkoboy', text: 'What is your name?'},
      {userlogin: 'alexandr', text: 'How are you?'},
      {userlogin: 'raschehmarov', text: 'Holywood'},
    ],
    newMessageContent:'',
};

const dialogsReducer = (state = dialogsDataInit, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let content = state.newMessageContent;
            state.messages.push({userlogin: 'guest', text: content});
            state.newMessageContent = '';
          return state;

        case UPDATE_NEW_MESSAGE_CONTENT:
            state.newMessageContent = action.content;
          return state;
          
        default:
         return state;
      }
}

export const updateNewMessageContentActionCreator = (content) => ({type: UPDATE_NEW_MESSAGE_CONTENT, content: content});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});


export default dialogsReducer;