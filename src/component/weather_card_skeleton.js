import React from "react";

const WeatherCardSkeleton = () => {
  return (
    <div className="weather-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-line skeleton-subtitle" />
      <div className="icon-container">
        <div className="skeleton skeleton-icon" />
        <div className="skeleton skeleton-line skeleton-condition" />
      </div>
      <div className="skeleton skeleton-temp" />
      <div className="skeleton skeleton-toggle" />
      <div className="weather-details skeleton-details">
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line" />
      </div>
    </div>
  );
};

export default WeatherCardSkeleton;
