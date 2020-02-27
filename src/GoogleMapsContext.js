import * as React from "react";
import {GoogleApiWrapper} from 'google-maps-react';

const GoogleMapsContext = React.createContext();
const GoogleMapsContextProvider = GoogleApiWrapper({
  apiKey: 'AIzaSyAl_XkmnroVhmrli2PoEPdK6toxlUnPVe4',
  libraries: ['places']
})((props) => {
  const val = props.google;
  return (<GoogleMapsContext.Provider value={val}>{props.children}</GoogleMapsContext.Provider>);
});

const GoogleMapsContextConsumer = GoogleMapsContext.Consumer; 

export {
  GoogleMapsContext,
  GoogleMapsContextProvider,
  GoogleMapsContextConsumer
};