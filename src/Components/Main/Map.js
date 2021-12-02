import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: 54.35,
  lng: 18.667
};

export const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
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

  function randomColor(ID) {
    let boatColor;
    let randomNumber = Math.random();
    if (0.3 > randomNumber ) {
      return boatColor = `#fb${ID}`
    }
    if (0.3 <= randomNumber &&  randomNumber < 0.6) {
      return boatColor = `#95${ID}`
    } else {
      return boatColor = `#9a${ID}`
    }
  }

  return isLoaded ? (
    <GoogleMap
        mapContainerClassName="map"
        center={center}
        zoom={10}
        options={{disableDefaultUI: true}}
        onLoad={onLoad}
        onUnmount={onUnmount}>
        { /* Child components, such as markers, info windows, etc. */ }

        {boats.map(boat => 
                    <Marker key={boat.id}
                      position={{
                        lat: boat.latitude,
                        lng: boat.longitude
                      }}
                      icon={{
                        path: "m -8.6069802,-699.67406 v 11.71992 C -235.72968,-388.21521 -327.18206,75.569598 -173.52643,697.7293 l 349.85233,1.8208 C 255.37494,382.8444 244.54877,244.93098 249.5522,75.527008 239.93581,-288.86154 140.11123,-513.84155 7.1898498,-687.67358 l -0.01,-12.32606 v 0 0",
                        scale: 0.06,
                        strokeWeight: 4,
                        strokeColor: "#454545",
                        fillColor: randomColor(boat.id), 
                        fillOpacity: 1,
                        rotation: boat.heading,
                      }}
                        label= {{text: String(boat.id),
                          color: "#DDD",
                          fontSize: "2.7rem",
                          fontWeight: "bold",
                      }} />
                )}

    </GoogleMap>
  ) : null;
}
