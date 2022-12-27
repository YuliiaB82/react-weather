import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Card from "./Card";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <div className="card">
        <div className="row">
          <Card name={"Humidity"} icon={"fa-solid fa-droplet"} value={"86%"} />
          <Card
            name={"Wind"}
            icon={"fa-brands fa-cloudscale"}
            value={"7km/h"}
          />
          <Card
            name={"Pleassure"}
            icon={"fa-brands fa-cloudscale"}
            value={"1022hPa"}
          />
          <Card name={"Feels like"} icon={"fa-solid fa-shirt"} value={"11°C"} />
        </div>
      </div>
      <small>
        {" "}
        <a
          href="https://github.com/YuliiaB82/weather-app"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          Open-source code
        </a>{" "}
        by Yuliia Blahovistna{" "}
      </small>
    </div>
  );
}
