import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherCard from "./WeatherCard";
import TemperatureCard from "./TemperatureCard";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      feels_like: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
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
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
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
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-secondary"
                value="search"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />

        <div className="card">
          <div className="row">
            <WeatherCard
              name={"Humidity"}
              icon={"fa-solid fa-droplet"}
              value="%"
              data={weatherData.humidity}
            />
            <WeatherCard
              name={"Wind"}
              icon={"fa-solid fa-wind"}
              value="km/h"
              data={weatherData.wind}
            />
            <WeatherCard
              name={"Pressure"}
              icon={"fa-brands fa-cloudscale"}
              value="hPa"
              data={weatherData.pressure}
            />
            <WeatherCard
              name={"Feels like"}
              icon={"fa-solid fa-shirt"}
              value="°C"
              data={weatherData.feels_like}
            />
          </div>
        </div>
        <div className="card">
          <div className="row">
            <TemperatureCard size={20} coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
  }
}
