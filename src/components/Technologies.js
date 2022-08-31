import React from "react";
import Tools from "./Tools";
import data from "../data";

const Technologies = () => {
  const cards = data.tools.map((item) => {
    return <Tools key={item.id} item={item} />;
  });

  return (
    <section className="technologies" id="section--technologies">
      <h1 className="technologies-title">Tools</h1>
      <div className="cards-list">{cards}</div>
    </section>
  );
};

export default Technologies;
