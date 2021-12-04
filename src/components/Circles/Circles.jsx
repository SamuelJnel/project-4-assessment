import React from "react";
import "./Circles.css";

const Circles = (props) => {
  console.log(props.selected);
  return (
    <div className="Circles">
      <div className={props.clicked === "1" ? "selected" : ""}>1</div>
      <div className={props.clicked === "2" ? "selected" : ""}>2</div>
      <div className={props.clicked === "3" ? "selected" : ""}>3</div>
      <div className={props.clicked === "4" ? "selected" : ""}>4</div>
    </div>
  );
};

export default Circles;