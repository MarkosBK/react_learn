import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';


const reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer
});

let store = createStore(reducers);

export default store;
