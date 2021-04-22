import  { useState,useEffect } from 'react'

const UseGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {lat: "", lng: ""}
    });

    const onSuccess = location => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    }

    const onError = error =>{
        setLocation({
            loaded: true,
            error,
        })
    }

    useEffect(() => {
        if(!"geolocation" in navigator) {
            onError({
                code: 0,
                message: "Localizacion no permitida"
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    },[])

    return location;
}

export default UseGeoLocation;