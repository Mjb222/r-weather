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
          rel="noreferrer noopener"
          target="_blank"
        >
          {" "}
          open-source project on GitHub,{" "}
        </a>
        and
        <a
          href="https://luminous-capybara-7b0b7c.netlify.app/"
          rel="noreferrer noopener"
          target="_blank"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
