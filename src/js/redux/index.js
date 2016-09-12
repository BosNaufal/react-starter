
import { combineReducers, createStore } from 'redux';
import post from './reducers/post.js';

const reducers = combineReducers({
  post
})

let store = createStore(reducers)

export default store;
