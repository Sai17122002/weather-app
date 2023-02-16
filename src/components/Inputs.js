import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
    setCity("");
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
    setCity("");
  };

  return (
    <div className="search-container">
      <div className="search-container-input">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
        />
        <UilSearch
          size={25}
          className="searchbar"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="location"
          onClick={handleLocationClick}
        />
      </div>

      <div className="input-temp">
        <button
          name="metric"
          className="temp-celcius"
          onClick={handleUnitsChange}
        >
          C°
        </button>
        <button
          name="imperial"
          className="temp-farenheit"
          onClick={handleUnitsChange}
        >
          F°
        </button>
      </div>
    </div>
  );
}

export default Inputs;
