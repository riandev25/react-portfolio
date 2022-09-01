import React from "react";

const Aboutme = () => {
  return (
    <div className="aboutme" id="section--aboutme">
      <section className="aboutme">
        <h1 className="details--name">
          Hi there! I'm <span className="full-name">Rian</span>
        </h1>
        <h1 className="details--role">
          <span>A Frontend Developer</span>
        </h1>
        <h1 className="details--quote">
          Passionate in building web applications.
        </h1>
        <p className="details--description">
          An aspiring developer with a degree in Mechanical Engineering and want
          to start a career in web development. Currently, I'm focused on
          improving frontend skills and learning ReactJS.
        </p>
      </section>
    </div>
  );
};

export default Aboutme;
