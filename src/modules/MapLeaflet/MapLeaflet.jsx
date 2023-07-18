import "./leaflet.scss";
import styles from "./mapLeaflet.module.scss";
import point from "../../assete/png/locationIcon.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";

const MapLeaflet = () => {
  const customIcon = L.icon({
    iconUrl: point,
    iconSize: [64, 64],
    iconAnchor: [31, 62],
  });

  return (
    <div
      style={{
        // width: "100%",
        height: "100%",
        backgroundColor: "teal",
      }}
    >
      <Link className={styles.btnBack} to={-1}>
        Back
      </Link>
      <MapContainer
        center={[50.446754135907184, 30.495015344005115]}
        zoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[50.446754135907184, 30.495015344005115]}
          icon={customIcon}
        >
          <Popup>
            tasty Go <br /> Food delivery
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
