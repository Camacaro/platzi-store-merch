import axios from "axios";
import { useEffect, useState } from "react";


const useGoogleAddress = address => {

  const [map, setMap] = useState({})

  console.log(address)

  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDi2ZhGQr6gagk72u-TR2mWPHPkfZC8CT0`

  useEffect( async () => {
    
    const response = await axios(API);
    
    console.log(response.data)
    console.log(response.data.results[0].geometry.location)

    setMap(response.data.results[0].geometry.location);

  }, [])

  return map;
}

export default useGoogleAddress