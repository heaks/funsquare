import React, { PropRypes } from 'react';
import GoogleMapInstance from './GoogleMap';
import QueriesList from './QueriesList';
import SearchForm from './SearchForm';

const App = React.createClass({
  render() {
    return (
      <div>
        <QueriesList/>
        <SearchForm/>
        <GoogleMapInstance/>
      </div>
    )
  }
});

export default App;