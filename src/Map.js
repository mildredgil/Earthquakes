import React from 'react';
import {Map, Marker, GoogleApiWrapper, Polygon} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bounds: props.bounds
    }
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}
      style={{position: 'relative',
      margin: 'auto',
      width: '50%',
      height: '500px'}}
      
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}
      >
        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{lat: 40.854885, lng: -88.081807}} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD5QaK4xhlY1ZTgwvm8wmiy86NYSzRemmI')
})(MapContainer)