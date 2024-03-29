import React from "react";
import { iconUrlFromCode } from "../Services/weatherService";

function Forecast({ title, items }) {
  return (
    <div className="max-w-[768px]">
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="fomt-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt=""
              className="w-12 my-12"
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
