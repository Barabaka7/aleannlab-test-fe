import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useState, useEffect } from "react";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;

interface MapProps {
  coord: [number, number];
}

export const Map = ({ coord }: MapProps) => {
  const [coordinates, setCoordinates] = useState<[number, number]>([
    30.5238, 50.4547,
  ]);
  //longitude latitide

  const [map, setMap] = useState<mapboxgl.Map>();

  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      style: "mapbox://styles/mapbox/dark-v10",
      center: coordinates,
      zoom: 9,
    });

    new mapboxgl.Marker({
      color: "#D8D8D8",
    })
      .setLngLat(coordinates)
      .addTo(mapboxMap);

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (coord[0]) {
      setCoordinates(coord);
    }
  }, [coord]);

  useEffect(() => {
    if (map) {
      map.setCenter(coordinates);
      new mapboxgl.Marker({
        color: "#D8D8D8",
      })
        .setLngLat(coordinates)
        .addTo(map);
    }
    // eslint-disable-next-line
  }, [coordinates]);

  return (
    <div
      ref={mapNode}
      style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
    />
  );
};
