import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
      </div>
      <footer>
        <a href="https://github.com/Mjb222/r-weather" target="_blank">
          {" "}
          Open-source project,{" "}
        </a>
        coded by Marium Bajwa
      </footer>
    </div>
  );
}
