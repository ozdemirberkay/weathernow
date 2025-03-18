import React from "react";

const WeatherCard = ({ data }) => {
  if (!data || !data.success) return <p>Veri bulunamadı</p>;

  const { location, current } = data.data;

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
      <p className="temperature">{current.temp_c}°C</p>
      <div className="weather-details">
        <p>Humidity: {current.humidity}%</p>
        <p>
          Wind: {current.wind_kph} km/h ({current.wind_dir})
        </p>
        <p>Pressure: {current.pressure_mb} mb</p>
        <p>Feelslike: {current.feelslike_c}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;
