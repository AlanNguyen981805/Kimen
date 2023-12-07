"use client";

import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDNI_ZWPqvdS6r6gPVO50I4TlYkfkZdXh8" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    ></GoogleMapReact>
  );
};

export default Map;
