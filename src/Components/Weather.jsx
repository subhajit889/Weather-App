import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/weather.css";

function Weather({ weather }) {

  // Define state for weather forecast
  const [forecast, setForecast] = useState([]);

  // Fetch weather forecast from OpenWeather API on component mount or when weather changes
  useEffect(() => {

    //Store the OpenWeatherMap API key in an environment variable
    const API = process.env.REACT_APP_WEATHER_API_KEY;

    const getForecast = async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${weather.name}&units=metric&appid=${API}`
        );
        // Filter and slice the response data to only include the forecast for the next 5 days
        setForecast(
          data.list.filter((item) => item.dt_txt.includes("12:00:00")).slice(0, 5)
        );
      } catch (error) {
        console.error(error);
      }
    };
    getForecast();
  }, [weather.name]);

  // Helper function to format the date for forecast items
  const formatDate = (date) => {
    const options = { weekday: "long", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  // Define state for temperature unit and helper function to toggle it
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleUnit = () => {
    setIsCelsius((prevState) => !prevState);
  };

  // Helper function to convert temperature to Celsius or Fahrenheit depending on the state of isCelsius
  const convertTemp = (temp) => {
    return isCelsius ? `${Math.round(temp)}°C` : `${Math.round(temp * 1.8 + 32)}°F`;
  };

  // Render the weather information and forecast
  return (
    <div className="weather">
      <div className="location">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="temp">{convertTemp(weather.main.temp)}</div>
      <div className="description">{weather.weather[0].description}</div>
      <div className="forecast">
        {forecast.map((item) => (
          <div className="forecast-item" key={item.dt}>
            <div className="date">{formatDate(item.dt_txt)}</div>
            <div className="icon">
              <img
                src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />
            </div>
            <div className="temp">{convertTemp(item.main.temp)}</div>
          </div>
        ))}
      </div>
      {/* Button to toggle temperature unit */}
      <button className="convert-btn" onClick={toggleUnit}>
        {isCelsius ? "Convert to Fahrenheit" : "Convert to Celsius"}
      </button>
    </div>
  );
}

export default Weather;