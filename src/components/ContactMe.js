import React from "react";
import ContactList from "./ContactList";
import data from "../data";

const ContactMe = () => {
  const cards = data.contactInfo.map((item) => {
    return <ContactList key={item.id} item={item} />;
  });

  return (
    <section className="contactme">
      <h1 className="contactme-title">Contact me</h1>
      <div className="contactme-list">{cards}</div>
    </section>
  );
};

export default ContactMe;
