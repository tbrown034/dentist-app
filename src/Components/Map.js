import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const markerPosition = {
  lat: 41.74823550483188,
  lng: -88.1667606297537141
};


const center = {
  lat: 41.74823550483188,
  lng: -88.1667606297537141,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDwt5C1zgXggpCw44IjmYs2GbJcuc5QXcU",
    // libraries: ['places']
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    
  
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
      center={center}
        zoom={13}
        mapContainerStyle={containerStyle}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker  position={markerPosition} defaultClickable />
        
      </GoogleMap>
    </div>
  ) : <></>;
}

export default Map;