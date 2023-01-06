import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import Card from "./Card";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Stockholm" />
      <div className="card">
        <div className="row">
          <Card name={"Humidity"} icon={"fa-solid fa-droplet"} value={"89%"} />
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
          href="https://github.com/YuliiaB82/react-weather"
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
