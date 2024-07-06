import React, { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";

const FindGrounds = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDzjhGRFc6zr04vdTOqLt-gVc9V32S9Lm4",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div className="bg-moon w-full h-full">
        <Map />
      </div>
    </div>
  );
};

function Map() {
  const [position, setPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [circle, setCircle] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition(position);
      });
    }
  }, []);

  useEffect(() => {
    if (position) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 15,
      });

      const request = {
        location: map.getCenter(),
        radius: "10000",
        name: ["sport ground"],
      };

      const service = new window.google.maps.places.PlacesService(map);

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const filteredResults = results.filter(
            (place) => place.business_status === "OPERATIONAL"
          );
          setFilteredResults(filteredResults);
          setMarkers(
            filteredResults.map((place) => {
              const marker = new window.google.maps.Marker({
                position: place.geometry.location,
                map,
              });
              return marker;
            })
          );
        }
      });

      const circleOptions = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        radius: 500,
      };

      const circle = new window.google.maps.Circle(circleOptions);
      setCircle(circle);
    }
  }, [position]);

  return (
    <div>
      <div className="flex ">
        <div className="text-primary w-1/2 border-2 border-black-100 rounded-2xl">
          {filteredResults.length > 0 && (
            <div className="overflow-y-auto h-96 flex border px-2 flex-wrap m-10">
              {filteredResults.map((place) => (
                <div
                  key={place.id}
                  className="flex flex-col w-full border-gray-600 justify-center border rounded-md pl-3 pt-3 pb-3 pr-3 bg-eggshell mt-1 drop-shadow-lg"
                >
                    {console.log(place.name, place.vicinity)}
                  <h3 className="font-bold">{place.name}</h3>
                  <p>{place.vicinity}</p>
                  <div></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          id="map"
          style={{
            height: "400px",
            width: "58%",
            marginTop: "45px",
            marginLeft: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default FindGrounds;
