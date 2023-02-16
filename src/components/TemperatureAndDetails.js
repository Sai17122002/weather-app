import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="temp-details-wrapper">
      <div className="temp-details">
        <p style={{ fontSize: "25px", color: "lightgreen" }}>{details}</p>
      </div>

      <div className="temp-details-container-1">
        <img src={iconUrlFromCode(icon)} alt="" />
        <p
          style={{ fontSize: "60px", paddingLeft: "40px" }}
        >{`${temp.toFixed()}°`}</p>
        <div>
          <div className="indi-temp-details">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span>{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="indi-temp-details">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span>{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="indi-temp-details">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="extra-details">
        <UilSun />
        <p className="">
          Rise:{" "}
          <span className="">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="divider">|</p>

        <UilSunset />
        <p className="divider">
          Set:{" "}
          <span className="">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="divider">|</p>

        <UilSun />
        <p className="">
          High: <span className="">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="divider">|</p>

        <UilSun />
        <p className="">
          Low: <span className="">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
