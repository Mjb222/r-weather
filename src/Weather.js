import React, { useState } from "react";

import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "44a6c7aa330748f665b912f89a534a59";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 offset-2">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control shadow-sm"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <span className="col-2">
              <input type="submit" value="🔍" className="searchbutton" />
              <input type="submit" value="📍" className="button" />
            </span>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
