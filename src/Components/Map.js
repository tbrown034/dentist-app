import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const markerPosition = {
  lat: 41.74841368014457,
  lng: -88.166756002096,
};

const center = {
  lat: 41.74841368014457,
  lng: -88.166756002096,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDwt5C1zgXggpCw44IjmYs2GbJcuc5QXcU",
    // libraries: ['places']
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={22}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={markerPosition} defaultClickable label={"Located Here"} />
        <></>
      </GoogleMap>
    </div>
  ) : <></>;
}

export default Map;