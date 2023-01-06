import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let apiKey = "44144f3a5bac41c0c3eb91949dd3a0c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="loc">
                <button id="location-btn" className="btn btn-secondary">
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </div>
            </div>
            <div className="col-8">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city name"
                  id="enterCity"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="col">
              <input
                type="submit"
                className="btn btn-secondary"
                value="search"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    searchCity();
  }
}
