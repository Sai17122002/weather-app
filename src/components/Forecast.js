import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div className="forcast-container">
      <div className="">
        <p
          style={{
            color: "lightgreen",
            fontWeight: "600",
            textAlign: "center",
            paddingBottom: "10px",
            marginTop: "20px",
          }}
        >
          {title}
        </p>
      </div>
      <hr className="" />

      <div className="forcast-container-item">
        {items.map((item, index) => (
          <div key={index} className="forcast-container-element">
            <p className="">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="" alt="" />
            <p className="">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
