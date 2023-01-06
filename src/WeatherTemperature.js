import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="temp-today">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units">
          °C |
          <a
            href="/"
            onClick={showFahrenheit}
            style={{ textDecoration: "none" }}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahreinheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temp-today">
        <strong>{Math.round(fahreinheit)}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius} style={{ textDecoration: "none" }}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
