"use client";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import "leaflet-defaulticon-compatibility";
const Map = () => {
  const [latitud, longitud] = [25.6919993936258, -109.0964712630344]; // Initial coordinates for the map's center
  return (
    <div>
      <MapContainer
        style={{ height: "350px", zIndex: "0" }}
        center={[latitud, longitud]}
        zoom={14}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitud, longitud]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
