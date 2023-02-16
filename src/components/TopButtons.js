import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Chennai",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "Delhi",
    },
    {
      id: 4,
      title: "london",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="top-button">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
