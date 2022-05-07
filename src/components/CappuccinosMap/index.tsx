import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";

const MARKERS = [
  {
    id: 1,
    name: "Pear Tree Cafe",
    score: 4,
    reviews: {
      goodFood: true,
      milkAlternativesAvailable: true,
      oatlyAvailable: true,
    },
    notes: "Amazing cappuccino, amazing stuff",
    address: "Clapham Common",
    coordinates: { lat: 51.51, lng: -0.09 },
  },
  {
    id: 2,
    name: "Trude's",
    score: 5,
    reviews: {
      goodFood: true,
      milkAlternativesAvailable: true,
      oatlyAvailable: true,
    },
    notes: "Amazing cappuccino, amazing stuff",
    address: "Clapham Common",
    coordinates: { lat: 51.505, lng: -0.1 },
  },
  {
    id: 3,
    name: "Up & Over",
    score: 3,
    reviews: {
      goodFood: true,
      milkAlternativesAvailable: true,
      oatlyAvailable: true,
    },
    notes: "Amazing cappuccino, amazing stuff",
    address: "Clapham Common",
    coordinates: { lat: 51.505, lng: -0.12 },
  },
  {
    id: 4,
    name: "Meghan's (nope)",
    score: 0,
    reviews: {
      goodFood: true,
      milkAlternativesAvailable: true,
      oatlyAvailable: true,
    },
    notes: "Amazing cappuccino, amazing stuff",
    address: "Clapham Common",
    coordinates: { lat: 51.505, lng: -0.13 },
  },
];

const useMarkers = () => {
  const [markers, setMarkers] = useState(MARKERS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setMarkers(MARKERS);
    setLoading(false);
    setError(undefined);
  }, []);

  return {
    markers,
    loading,
    error,
  };
};

const CappuccinosMap = () => {
  const { markers, loading } = useMarkers();

  if (loading) {
    return <div>Loading...</div>; // Make this nice
  }

  return (
    <div className="bg-primary">
      <MapContainer
        className="h-screen"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.coordinates.lat, marker.coordinates.lng]}
          >
            <Popup>
              <b>{marker.name}</b> / {marker.score}/5.
            </Popup>
          </Marker>
        ))}

        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default CappuccinosMap;
