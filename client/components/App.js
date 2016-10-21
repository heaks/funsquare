import React, { PropRypes } from 'react';
import GoogleMapInstance from './GoogleMap';
import QueriesList from './QueriesList';
import SearchForm from './SearchForm';
import Results from './Results';

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
        <QueriesList/>
        <SearchForm/>
        <GoogleMapInstance/>
        <Results/>
      </div>
    )
  }
});

export default App;