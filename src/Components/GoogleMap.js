import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

  
  
const GoogleMap = ({ LocationPin, zoomLevel }) => {

    
      const location = {
        address: '11296 Rickert Dr, Naperville, IL 60540',
        lat: 41.748348062742295,
        lng:  -88.16665423542193,
      }



    return (
    
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);
    }

export default GoogleMap