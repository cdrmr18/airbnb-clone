import Map from "react-map-gl";

export default function SearchMap() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/cdrmr18/clgzcnuc200i301p65cct0ind"
      mapboxAccessToken={process.env.mapbox_key}
    />
  );
}
