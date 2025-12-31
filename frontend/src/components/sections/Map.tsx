import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
    center: [number, number];
};

const Map = ({ center }: MapProps) => {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 shadow-xl bg-white rounded-lg">
        <MapContainer
            center={center}
            zoom={13}
            scrollWheelZoom={false}
            key={center.toString()}
            className="h-96 w-full"
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={center}>
            <Popup>
                Selected location <br /> Forest data overview
            </Popup>
            </Marker>
        </MapContainer>
        </div>
    );
};

export default Map;
