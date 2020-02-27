import React from 'react';
import {Map, Marker} from 'google-maps-react';
import {AppContext} from './AppContext';
import { withStyles } from '@material-ui/core/styles';

const MapContainer = ({classes}) => {
  const {
    state,
    google,
    markersData,
    zoom,
    onReadyMap
  } = React.useContext(AppContext);

  let markerUrlGreen = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
  let markerUrlYellow = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
  let markerUrlRed = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
  
  return (
      <Map google={google} zoom={zoom}
      onReady={onReadyMap}
      className={classes.map}
      center={{lat: state.initialLat, lng: state.initialLng}}
      >
        {markersData.length > 0 && 
          markersData.map(m => {
            var url = null;
            if(m.magnitude < 3) {
              url = markerUrlGreen;
            } else if(m.magnitude < 6) {
              url = markerUrlYellow;
            } else {
              url = markerUrlRed;
            }

            return (
            <Marker
              position={{ lat: m.lat, lng: m.lng }}
              title={"magnitude: " + m.magnitude}
              data={m}
              icon={{
                url: url,
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(32,32)
              }}
              />
            )
          })}
      </Map>
  );
}

const styles = () => ({
  map: {
    height: '85vh !important'
  }
});
 
export default withStyles(styles)(MapContainer);