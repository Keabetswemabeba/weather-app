import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Pretoria",
    },
    {
      id: 2,
      title: "Johannesburg",
    },
    {
      id: 3,
      title: "Cape Town",
    },
    {
      id: 4,
      title: "Bloemfontein",
    },
    {
      id: 5,
      title: "Durban",
    },
  ];

  return (
    <div className="flex items-center justify-around my-12 space-x-6">
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
