import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';

// TODO: import root reducer
import rootReducer from './reducers/index'
let time = new Date();

const queries = [
  {request: 'Restaurant', searchPoint: {lat: 49.834388, lng: 24.025106}, radius: 3, time: moment(time).format()},
  {request: 'Pizzeria', searchPoint: {lat: 49.834388, lng: 24.025106}, radius: 3, time: moment(time).format()}
];
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