import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function TemperatureDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="font1">
        <strong>{day()}</strong>
      </div>
      <div className="fa-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
      </div>
      <span className="font2">{maxTemperature()}</span>
      <span className="font3">{minTemperature()}</span>
    </div>
  );
}
