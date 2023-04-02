import './App.css';
import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=47d323bf2e70ff4a52e00dcbb5fe07bf`
        );
        setWeather(data);
        setQuery("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="app">
        <h1>The Weather App</h1>
        <input
          type="text"
          className="search-box"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={searchWeather}
        />
        {/* <div className="src-btn">
        <button onClick={searchWeather}>Search</button>
      </div> */}
        {weather.main && <Weather weather={weather} />}
      </div>
    </>
  );
}

export default App;
