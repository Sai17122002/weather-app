import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="time-location">
        <p>
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="name-country">
        <p className="">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;