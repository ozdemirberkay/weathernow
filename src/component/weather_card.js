import React, { useState } from "react";

const WeatherCard = ({ data }) => {
  const [unit, setUnit] = useState("c");

  if (!data || !data.success) return <p>Veri bulunamadı</p>;

  const { location, current } = data.data;

  const isC = unit === "c";
  const symbol = isC ? "°C" : "°F";
  const temp = isC ? current.temp_c : current.temp_f;
  const feelslike = isC ? current.feelslike_c : current.feelslike_f;

  return (
    <div className="weather-card">
      <h2>
        {location.name}, {location.country}
      </h2>
      <p>{location.localtime}</p>
      <div className="icon-container">
        <img
          src={`https:${current.condition.icon}`}
          alt={current.condition.text}
        />
        <p>{current.condition.text}</p>
      </div>
      <p className="temperature">
        {temp}
        {symbol}
      </p>
      <div className="unit-toggle">
        <button
          className={`unit-btn ${isC ? "active" : ""}`}
          onClick={() => setUnit("c")}
        >
          °C
        </button>
        <button
          className={`unit-btn ${!isC ? "active" : ""}`}
          onClick={() => setUnit("f")}
        >
          °F
        </button>
      </div>
      <div className="weather-details">
        <p>Humidity: {current.humidity}%</p>
        <p>
          Wind: {current.wind_kph} km/h ({current.wind_dir})
        </p>
        <p>Pressure: {current.pressure_mb} mb</p>
        <p>
          Feelslike: {feelslike}
          {symbol}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
