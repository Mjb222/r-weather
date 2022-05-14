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

      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="">
              <WeatherTemp celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <ul>
          <li>Humidity: {props.data.humidity}% </li>
          <li> Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
}
