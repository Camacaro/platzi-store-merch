import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  
  const containerStyle = {
    width: '100%',
    height: '50vh'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
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
