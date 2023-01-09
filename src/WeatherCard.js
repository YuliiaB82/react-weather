import React from "react";
import "./Weather.css";

export default function WewatherCard(props) {
  return (
    <div className="col">
      <div className="font1">{props.name}</div>
      <i className={props.icon}></i>
      <div className="font2">
        {props.data} {props.value}
      </div>
    </div>
  );
}
