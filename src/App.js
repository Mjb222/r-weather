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
        Project coded by Marium Bajwa,{" "}
        <a
          href="https://github.com/Mjb222/r-weather"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-source project on GitHub,{" "}
        </a>
        and
        <a
          href="https://luminous-capybara-7b0b7c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
