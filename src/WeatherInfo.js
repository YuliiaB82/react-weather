import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="card">
      <form>
        <div className="row">
          <div className="col">
            <WeatherTemperature celsius={props.data.temperature} />
            <h1 className="city">
              <strong>{props.data.city}</strong>
            </h1>
            <div>
              <h2 className="date">
                <FormatDate date={props.data.date} />
              </h2>
              <h2 className="weather">{props.data.description}</h2>
            </div>
          </div>
          <div className="col">
            <img
              src={props.data.img}
              className="weatherIcon"
              alt={props.data.description}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
