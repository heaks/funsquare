import React, { PropTypes } from 'react';

const Single = React.createClass({
  render() {
    return(
      <div>
        {this.props.children}
        I'm the single
      </div>
    )
  }
});

export default Single;