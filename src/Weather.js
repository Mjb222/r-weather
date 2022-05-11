import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control shadow-sm"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="🔍" className="searchbutton" />
              <input type="submit" value="📍" className="button" />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>

        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                className="icon"
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}% </li>
            <li> Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
        <br />
        <br />
        <div class="row">
          <div class="col-sm-2">
            <div class="forecast-day">Sat</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">20</div>
          </div>

          <div class="col-sm-2">
            <div class="forecast-day">Sun</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">19</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">20</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Tue</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">20</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Wed</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">20</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Thru</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">20</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "44a6c7aa330748f665b912f89a534a59";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
