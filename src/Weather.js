import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>Paris</h1>
      <ul>
        <li>Cloudy</li>
        <li>Friday</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="icon"
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Clear"
              className="float-left"
            />

            <span className="temperature">15 </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: 30% </li>
          <li> Windspeed: 70 km/h</li>
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
}
