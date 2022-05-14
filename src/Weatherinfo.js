import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <h1>{props.data.city}</h1>

      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemp celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}% </li>
          <li> Wind: {props.data.wind}km/h</li>
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
