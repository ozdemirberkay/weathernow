import React, { useState } from "react";
import Button from "../component/button";
import Input from "../component/input";
import { getWeatherFromName } from "../service/weatherService";
import cities from "../shared/city";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherCard from "../component/weather_card";

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) {
      setResult({ success: false, message: "Query is empty!" });
    }

    setLoading(true);
    const response = await getWeatherFromName({ query: query });
    setLoading(false);

    setResult(response);
  };

  return (
    <div className="Home">
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Input
          onQueryChange={setQuery}
          value={query}
          placeholder="Search City"
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

      {loading && <ClipLoader color="#faf3e0" size={50} />}

      {result && result.success && <WeatherCard data={result} />}
      {result && !result.success && (
        <div className="error-message">{`${result.message}`}</div>
      )}
    </div>
  );
}
