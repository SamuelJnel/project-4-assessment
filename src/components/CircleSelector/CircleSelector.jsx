import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => {
  return (
    <div className="CircleSelector">
      <button
        className={props.clicked === "1" ? "selected" : ""}
        onClick={props.handleCircleChange}
        value="1"
      >
        SELECT CIRCLE 1
      </button>
      <button
        className={props.clicked === "2" ? "selected" : ""}
        onClick={props.handleCircleChange}
        value="2"
      >
        SELECT CIRCLE 2
      </button>
      <button
        className={props.clicked === "3" ? "selected" : ""}
        onClick={props.handleCircleChange}
        value="3"
      >
        SELECT CIRCLE 3
      </button>
      <button
        className={props.clicked === "4" ? "selected" : ""}
        onClick={props.handleCircleChange}
        value="4"
      >
        SELECT CIRCLE 4
      </button>
    </div>
  );
};

export default CircleSelector;
