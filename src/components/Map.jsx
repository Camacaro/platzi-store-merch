import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  
  const containerStyle = {
    width: '100%',
    height: '50vh'
  };

  const center = {
    lat: data.lat,
    lng: data.lng
  };

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDi2ZhGQr6gagk72u-TR2mWPHPkfZC8CT0'
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={9}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
