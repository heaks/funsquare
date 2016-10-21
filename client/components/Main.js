import React, { PropRypes } from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1 className="header">
          <Link to="/">FunSquare</Link>
        </h1>
        {this.props.children}
      </div>
    )
  }
});

export default Main;