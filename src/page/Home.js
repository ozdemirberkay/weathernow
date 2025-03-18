import React, { useState } from "react";
import Button from "../component/button";
import Input from "../component/input";
import { getWeatherFromName } from "../service/weatherService";
import cities from "../shared/city";
import ClipLoader from "react-spinners/ClipLoader";

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

      {loading && <ClipLoader color="#faf3e0" size={50} />}

      {result && result.success && (
        <div className="p-2 bg-gray-100 rounded-md">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
