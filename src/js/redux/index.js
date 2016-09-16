
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import post from './reducers/post.js';

const reducers = combineReducers({
  post
})

let store = createStore(reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(thunkMiddleware)
)

export default store;
