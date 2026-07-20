import React, { useState } from "react";
import Button from "../component/button";
import Input from "../component/input";
import { getWeatherFromName } from "../service/weatherService";
import cities from "../shared/city";
import WeatherCard from "../component/weather_card";
import WeatherCardSkeleton from "../component/weather_card_skeleton";
import ErrorState from "../component/error_state";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResult({
        success: false,
        errorType: "empty",
        message: "Please enter a city name to search.",
      });
      return;
    }

    setResult(null);
    setLoading(true);
    const response = await getWeatherFromName({ query: trimmed });
    setLoading(false);

    setResult(response);
  };

  return (
    <div className="Home">
      <div className="search-bar">
        <Input
          onQueryChange={setQuery}
          value={query}
          placeholder="Search City"
          onEnter={handleSearch}
        />
        <Button
          onClick={handleSearch}
          disabled={loading}
          text={"Get Weather"}
        />
      </div>
      <div className="divider"></div>

      <div className="cities-container">
        {cities.map((city) => (
          <div key={city} className="city-item">
            <Button
              onClick={() => setQuery(city)}
              disabled={loading}
              text={city}
            />
          </div>
        ))}
      </div>

      <div className="divider"></div>

      {loading && <WeatherCardSkeleton />}

      {!loading && result && result.success && <WeatherCard data={result} />}
      {!loading && result && !result.success && (
        <ErrorState
          variant={result.errorType}
          message={result.message}
          onRetry={result.errorType === "empty" ? undefined : handleSearch}
        />
      )}
    </div>
  );
}
