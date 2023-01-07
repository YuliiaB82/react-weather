import React from "react";
import "./Weather.css";

export default function Card(props) {
  return (
    <div className="col">
      <span className="font1">{props.name}</span>
      <br />
      <i className={props.icon}></i>
      <br />
      <span className="font2">
        {props.data} {props.value}
      </span>
    </div>
  );
}
