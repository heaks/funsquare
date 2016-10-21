import React from 'react';

const contactInfo = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
        <h4>Author:</h4>
        <p>Name: Victor Vyshnevskyi</p>
        <p>Github: https://github.com/heaks/</p>
        <p>Email: victor.vyshnevsky64@gmail.com</p>
      </div>
    )
  }
});

export default contactInfo;