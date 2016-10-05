import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// TODO: import root reducer
// import rootReducer from './reducers/index'

const queries = [];
const results = [];
const comments = [];
const markers = [];

// create an object for the default state
const defaultState = {
  queries,
  results,
  comments,
  markers
};

// TODO: write reducers
// const store = createStore(rootReducer, defaultState);

// export default store;