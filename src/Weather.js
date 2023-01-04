import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      img: "http://openweathermap.org/img/wn/04n@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="card">
        <form>
          <div className="row">
            <div className="col">
              <div className="temp-today">
                <strong>{Math.round(weatherData.temperature)}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
              <h1 className="city">
                <strong>{weatherData.city}</strong>
              </h1>
              <div>
                <h2 className="date">
                  <FormatDate date={weatherData.date} />
                </h2>
                <h2 className="weather">{weatherData.description}</h2>
              </div>
            </div>
            <div className="col">
              <img
                src={weatherData.img}
                className="fa-solid fa-sun"
                alt={weatherData.description}
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    let apiKey = "44144f3a5bac41c0c3eb91949dd3a0c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
