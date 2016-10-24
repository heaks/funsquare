import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  margin: 20
};


const SearchForm = React.createClass({
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div>
            <TextField
              hintText="Enter the venue"
              id="venue-input"
            />
            <RaisedButton
              label="Search"
              className="search-venue-button"
              style={buttonStyle}
            />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
});

export default SearchForm;