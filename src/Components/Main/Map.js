import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: 54.35,
  lng: 18.667
};

export const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD-c6xAbCuTYtp1tDVSa8tsQVTeHybRkGE"
  });

  const [map, setMap] = useState(null);
  const { boats } = props;

  const onLoad = useCallback(map => {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(map => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
        mapContainerClassName="map"
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}>
        { /* Child components, such as markers, info windows, etc. */ }

        {boats.map(boat =>
                    <Marker position={{
                        lat: boat.latitude,
                        lng: boat.longitude
                      }}
                      label={String(boat.id)}
                    />
                )}
      
      <div className="toggle_component"></div>
    </GoogleMap>
  ) : null;
}
