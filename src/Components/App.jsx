import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import './CSS/App.css';

function App() {

  // Store the OpenWeatherMap API key in an environment variable
  const API = process.env.REACT_APP_WEATHER_API_KEY;

  // Set up state to store the user's query and the weather data returned by the API
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // Function to search for weather data when the user clicks the "Search" button
  const searchWeather = async (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (!query) {
        // If the user has not entered a query, show an alert and exit the function
        alert("Please enter a city name.....!!!!");
        return;
      }
      try {
        // Call the OpenWeatherMap API to get weather data for the user's query
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API}`
        );
        // Update state with the weather data and clear the query
        setWeather(data);
        setQuery("");
      } catch (error) {
        // If there is an error calling the API, log the error to the console
        console.error(error);
      }
    }
  };

  // Render the app
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
        // onKeyPress={searchWeather}
        />
        <button className="search-btn" onClick={searchWeather}>Search</button>
        {weather.main && <Weather weather={weather} />}
        {/* If the "weather" state contains data, render the Weather component with that data */}
      </div>
    </>
  );
}

export default App;
