import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';

const GoogleMapInstance = React.createClass({
  render () {
    const apiKey = 'AIzaSyDTuCROZWUGNj7BcNQbWNzcIhbG4mqW0D8';
    let center = {lat: 49.834388, lng: 24.025106};
    let zoom = 9;
    return (
      <div style={{minWidth: '700px', width:'80%', height:'400px'}}>
        <GoogleMap
          bootstrapURLkeys={{
            key: apiKey
          }}
          center= {center}
          zoom= {zoom}
        >
        </GoogleMap>
      </div>
    )
  }
});

export default GoogleMapInstance;