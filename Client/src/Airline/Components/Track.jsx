import React, { useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// 34.0522 -118.2437
const Track = ({ ticket, setRegion, setCountry, setPlace , setProperties}) => {
  const apiKey =
    "v1.public.eyJqdGkiOiIxZGZjYTExNS00NDk1LTQwMmUtODBiMi04ZDU0ZGEzYmU5MjQifUY6ZITnlBFeuPLVOAg9oamlqpnAB9v18YKuAGYg_WfEhXx4z0gh1d4dLB0EMCnxCCEq-QnWYi_sHq-hC8k_1S1S_5kAsELqbWG-b1GBVHCiqywO_3gSxbXPc4EEq-IO-aqfCHePo-sP5olNPPDTc2lm-nwV3S12uv7DWHEKafRVD1P_zDBu6aCU9NTnwiaDm9vgCHijMrrQeo0pAzO-G-7SCYEpmc-VZiZqZ_rhPZluW9aqSIAs8boHLFFxdcEV8qCGHS_YBl1va2HfBT1TPTi1spcU-Ve3pRiI4opNenRAwm8QyhcLNzjTHgA7quQCGbGqgvhRMM0z19rsVqZttRI.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";
  const mapName = "Bagguard";
  const region = "us-east-1";
  const AccessToken =
    "pk.eyJ1IjoiYXNtYS05OSIsImEiOiJjbGxleWcwbncwYjM0M3FxcWZrczU3OGFlIn0.Hg_UqwKRi6NxxZbpwJotmA";

  const getCountry = (longitude, latitude) => {
    // Fetch the region using reverse geocoding
    console.log(latitude, longitude);
    const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${AccessToken}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const features = data.features;
        console.log(features);
        if (features.length > 0) {
          // Extract the region from the first feature's context
          const region = features[0].context.find((item) =>
            item.id.includes("region")
          ).text;
          const Place = features[0].place_name;
          const Properties = features[0].properties.category;
          let country = null;
          for (const contextItem of features[0].context) {
            if (contextItem.id.startsWith("country")) {
              country = contextItem.text;
              break; // Stop searching once we find the country
            }
          }
          // console.log(region, country, Place , Properties);
          setRegion(region);
          setCountry(country);
          setPlace(Place);
          setProperties(Properties)
          
        }
      })
      .catch((error) => {
        console.error("Error fetching reverse geocoding data:", error);
      });
  };
  useEffect(() => {
    let Longitude = ticket[0]?.longitude ? ticket[0]?.longitude : 0;
    let Latitude = ticket[0]?.latitude ? ticket[0]?.latitude : 0;

    getCountry(Longitude, Latitude);
    const map = new maplibregl.Map({
      container: "map",
      style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
      center: [Longitude, Latitude],
      zoom: 5,
    });
    map.addControl(new maplibregl.NavigationControl(), "top-left");
    // Create a hexagon feature coordinates Longitude Latitude
    const hexagonCenter = [35.930359, 31.963158];
    const hexagonRadius = 0.05; // Approximate radius in degrees, adjust as needed
    const numHexagonVertices = 6;
    const hexagonCoordinates = [];

    for (let i = 0; i < numHexagonVertices; i++) {
      const angle = (i / numHexagonVertices) * Math.PI * 2;
      const x = hexagonCenter[0] + hexagonRadius * Math.cos(angle);
      const y = hexagonCenter[1] + hexagonRadius * Math.sin(angle);
      hexagonCoordinates.push([x, y]);
    }
    hexagonCoordinates.push(hexagonCoordinates[0]); // Closing point

    // Add the hexagon feature to the map as a source and layer
    map.on("load", () => {
      map.addSource("hexagon-source", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [hexagonCoordinates],
          },
        },
      });

      map.addLayer({
        id: "hexagon-layer",
        type: "fill",
        source: "hexagon-source",
        paint: {
          "fill-color": "blue",
          "fill-opacity": 0.3,
        },
      });

      // Add a marker with a different center
      const markerCenter = [Longitude, Latitude]; // Different center point
      const marker = new maplibregl.Marker().setLngLat(markerCenter).addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [ticket]);

  return <div className="h-96 lg:w-full py-20 " id="map"></div>;
};

export default Track;
