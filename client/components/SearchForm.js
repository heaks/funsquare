import React, { PropTypes } from 'react';

const SearchForm = React.createClass({
  render() {
    return (
      <form ref="searchForm" className="search-form">
        <input
          type="text"
          ref="searchRequest"
          placeholder="enter your request"
        />
      </form>
    )
  }
});

export default SearchForm;