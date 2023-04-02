import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Weather({ weather }) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=47d323bf2e70ff4a52e00dcbb5fe07bf`
        );
        setForecast(data.list.filter((item) => item.dt_txt.includes("12:00:00")));
      } catch (error) {
        console.error(error);
      }
    };
    getForecast();
  }, [weather.name]);

  const formatDate = (date) => {
    const options = { weekday: "long", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div className="weather">
      <div className="location">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="temp">{Math.round(weather.main.temp)}°C</div>
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
            <div className="temp">{Math.round(item.main.temp)}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;