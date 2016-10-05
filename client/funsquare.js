import React from 'react';
import { render } from 'react-dom';
import css from './styles/main.styl';
import App from './components/App';
import Single from './components/Single';
import ContactPage from './components/ContactPage';
import Main from './components/Main';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/view/:queryId" component={Single}></Route>
      <Route path="/contact" component={ContactPage}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  console.log('collection', collection, itemsPerPage);
  this.collection = collection;
  this.itemsPerPafe = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  var result = []
  var items = this.collection.length;
  for(items; items > 0;) {
    if(items >= this.itemsPerPage) {
      items -= this.itemsPerPage;
      result.push(itemsPerPage)
    } else {
      result.push(items);
      items = 0;
    }
  }
  console.log(result)
  return result[pageIndex] || -1
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if(itemIndex > this.collection.length || itemIndex < 0) {
    var fullPages = Math.floor(this.collection.length / this.itemsPerPage);
    var result = new Array(fullPages).fill(this.itemsPerPage)
    return result.length
  } else {
    return -1;
  }
}