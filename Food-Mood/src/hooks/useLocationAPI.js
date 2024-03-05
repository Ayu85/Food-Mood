import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLocation } from "../redux/slices/Location";

const LocationAPI = () => {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const dispatch = useDispatch()
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);
    dispatch(addLocation({ latitude: position.latitude, longitude: position.longitude }))
}

export default LocationAPI
