import avatar from '../logo.svg'
let profileDataInit = {
  posts: [
    {user_name: 'Markos Basilio', content: 'Hello World!', image: avatar, likesCount: 231, comments: 23},
    {user_name: 'Anton Rynkovoy', content: 'Good job Markos!', image: avatar, likesCount: 231, comments: 23},
    {user_name: 'Alexandr Bandurko', content: 'How do you do?', likesCount: 231, comments: 23},
    {user_name: 'Ivan Raschehmarov', content: 'Hi guys, go Dota', likesCount: 231, comments: 23},
    {user_name: 'Serhii Ruban', content: 'Hi guys, go Dota', likesCount: 231, comments: 23},
    {user_name: 'Vadym Harlamenko', content: 'Hello World!', likesCount: 231, comments: 23},
  ],
  newPostContent: ':)',
};

const ADD_POST = 'ADD-POST';
const UPDATE_POST_CONTENT = 'UPDATE-POST-CONTENT';

const profileReducer = (state = profileDataInit, action) => {
    switch (action.type) {
        case ADD_POST:
          let content = state.newPostContent;
          let newPost = {
            user_name: 'Markos Basilio',
            content: content,
            image: avatar,
            likesCount: 231,
            comments: 23
          }
          state.posts.push(newPost);
          state.newPostContent = '';
          return state;

        case UPDATE_POST_CONTENT:
          state.newPostContent = action.content;
          return state;

        default:
         return state;
      }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostContentActionCreator = (content) => ({type: UPDATE_POST_CONTENT, content: content});

export default profileReducer;