import React, { PropRypes } from 'react';
import { Link } from 'react-router';
import GoogleMapInstance from './GoogleMap';
import QueriesList from './QueriesList';
import SearchForm from './SearchForm';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1 className="header">
          <Link to="/">Hello FunSquare</Link>
        </h1>
        <QueriesList/>
        <SearchForm/>
        <GoogleMapInstance/>
      </div>
    )
  }
});

export default App;