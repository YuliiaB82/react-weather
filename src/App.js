import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App(props) {
  return (
    <div className="App">
      <Weather defaultCity="Stockholm" />

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
