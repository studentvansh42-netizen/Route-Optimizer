import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";


const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const access_token = import.meta.env.VITE_MAP_TOKEN;
  
  useEffect(() => {
      mapRef.current = new mapboxgl.Map({
          accessToken: `${access_token}`,
          container: mapContainerRef.current,
          center: [77.216, 28.644],
          zoom: 12
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className=" border border-gray-300" style={{ height : '100%' }} ref={mapContainerRef} id="map-container" />
  );
};

export default MapboxExample;
