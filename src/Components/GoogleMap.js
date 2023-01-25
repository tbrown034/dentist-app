import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap(){
  const defaultProps = {
    center: {
      lat: 41.74841368014457, 
      lng: -88.166756002096
    },
    zoom: 14
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCwX08HUwDEqG6xSWAFLozTBWBAB3e-aNc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={41.74841368014457}
          lng={-88.166756002096}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}