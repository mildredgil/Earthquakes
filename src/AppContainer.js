import React from 'react';
import { GoogleMapsContext } from './GoogleMapsContext';
import throttle from 'lodash/throttle';

const useApp = () => {
  const google = React.useContext(GoogleMapsContext);
  const [autocompleteService, setAutoCompleteService] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [markersData, setMarkersData] = React.useState([]);
  const [zoom, setZoom] = React.useState(6);
  const [state, setState] = React.useState({
    initialLat: null,
    initialLng: null,
    error: null
  });
  
  React.useEffect(()=> {
    if(google && google.maps) {
      var a = new google.maps.places.AutocompleteService();
      setAutoCompleteService(a);
    }
  }, [google]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          ...state,
          initialLat: position.coords.latitude,
          initialLng: position.coords.longitude
        });
        console.log("user loc");
      },
      (error) => setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 },
    );
  }

  React.useEffect(() => {
    const geocoder = new google.maps.Geocoder;

    if(selected != null) {
      geocoder.geocode({'placeId': selected.place_id}, function(results, status) {
        if (status === 'OK') {
          getEarthquakesInfo(results[0].geometry.viewport);
          moveMapBounds(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
  },[selected]);

  const onChangeValue = (event, value) => {
    setSelected(value);
  }

  const getEarthquakesInfo = (bounds) => {
    let north  =   bounds.getNorthEast().lat();   
    let east   =   bounds.getNorthEast().lng();
    let south  =   bounds.getSouthWest().lat();   
    let west   =   bounds.getSouthWest().lng();   
    
    fetch(
      'https://secure.geonames.org/earthquakesJSON?north='+ north + 
      '&south=' + south + 
      '&east=' + east + 
      '&west=' + west + 
      '&username=mildredgil'
    )
    .then(res => res.json())
    .then((data) => {
      setMarkersData(data.earthquakes);
      setZoom(6);
    })
  }

  const get10LastYear = () => {
    let date = new Date();
    fetch('https://secure.geonames.org/earthquakesJSON?north=90&south=-90&east=180&west=-180&minMagnitude=5&maxRows=500&date=' + 
    date.getFullYear() + '-' + 
    (date.getMonth()  < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + 
    date.getDate() + 
    '&username=mildredgil')
    .then(res => res.json())
    .then((data) => {
      setMarkersData(data.earthquakes.sort(function(a, b){return b.magnitude - a.magnitude}).slice(0, 10));
    })
    setZoom(2);
  }
  
  const moveMapBounds = (lat, lng) => {
    setState({
      ...state,
      initialLat: lat,
      initialLng: lng
    });
  }

  const handleChange = event => {
    setInputValue(event.target.value);
  };
  
  React.useEffect(() => {
    let active = true;
    if (autocompleteService == null) {
      return undefined;
    }
    
    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }

    const request = {
      input: inputValue,
      types: ['geocode']
    };
    autocompleteService.getPlacePredictions(request, function(results, status) {
      if (active) {
        setOptions(results || []);
      }
    })

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  const onReadyMap = (mapProps, map) => {
    getUserLocation();
  }

  return {
    state,
    getUserLocation,
    handleChange,
    onChangeValue,
    options,
    markersData,
    google,
    zoom,
    onReadyMap,
    get10LastYear
  }
}

export default useApp;