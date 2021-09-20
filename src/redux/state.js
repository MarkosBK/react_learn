import avatar from '../logo.svg'
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';




let store = {
  _state : {
    dialogsData: {
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
    },
    profileData: {
      posts: [
        {user_name: 'Markos Basilio', content: 'Hello World!', image: avatar, likesCount: 231, comments: 23},
        {user_name: 'Anton Rynkovoy', content: 'Good job Markos!', image: avatar, likesCount: 231, comments: 23},
        {user_name: 'Alexandr Bandurko', content: 'How do you do?', likesCount: 231, comments: 23},
        {user_name: 'Ivan Raschehmarov', content: 'Hi guys, go Dota', likesCount: 231, comments: 23},
        {user_name: 'Serhii Ruban', content: 'Hi guys, go Dota', likesCount: 231, comments: 23},
        {user_name: 'Vadym Harlamenko', content: 'Hello World!', likesCount: 231, comments: 23},
      ],
      newPostContent: ':)',
    },
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState(){
    return this._state;
  },
  dispatch(action){
    this._state.profileData = profileReducer(this._state.profileData, action);
    this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
    this._callSubscriber(this._state);
  }
}



export default store;