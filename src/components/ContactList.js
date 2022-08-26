import React from "react";

const ContactList = (props) => {
  return (
    <div className="contactme-card">
      <a href={props.item.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.item.imgSrc}
          alt={props.item.name}
          className="card--image"
        />
      </a>
      <span className="card--name">{props.item.title}</span>
    </div>
  );
};

export default ContactList;
