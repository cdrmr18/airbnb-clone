"use client";
import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function SearchMap() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 11,
  });

  return (
    <Map
      {...viewState}
      // style={{ width: 600, height: '100%' }}
      mapStyle="mapbox://styles/cdrmr18/clgzcnuc200i301p65cct0ind"
      mapboxAccessToken={process.env.mapbox_key}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
}
