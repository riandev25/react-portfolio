import React from "react";

const Tools = (props) => {
  return (
    <div className="tools-card">
      <img
        src={props.item.imgSrc}
        alt={props.item.name}
        className="card--image"
      />
      <span className="card--name">{props.item.title}</span>
    </div>
  );
};

export default Tools;
