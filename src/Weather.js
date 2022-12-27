import React from "react";
import "./Weather.css";

export default function Weather() {
  let fakeData = {
    temperature: 9,
    city: "New York",
    date: "Saturday, 11:03",
    weather: "Overcast cloud",
    img: "http://openweathermap.org/img/wn/04n@2x.png",
  };
  return (
    <div className="card">
      <form>
        <div className="row">
          <div className="col">
            <div className="temp-today">
              <strong>{fakeData.temperature}</strong>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </span>
            </div>
            <h1 className="city">
              <strong>{fakeData.city}</strong>
            </h1>
            <div>
              <h2 className="date">{fakeData.date}</h2>
              <h2 className="weather">{fakeData.weather}</h2>
            </div>
          </div>
          <div className="col">
            <img src={fakeData.img} className="fa-solid fa-sun" />
          </div>
        </div>
      </form>
    </div>
  );
}
