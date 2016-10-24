import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// TODO: import root reducer
import rootReducer from './reducers/index'

const queries = [];
const results = [];
const comments = [
  {author: 'Heaks', text: 'Welcome to the chat, pales!'},
  {author: 'Admin', text: 'Check out new spots in your town'},
];
const markers = [];

// create an object for the default state
const defaultState = {
  queries,
  results,
  comments,
  markers
};

// TODO: write reducers
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;