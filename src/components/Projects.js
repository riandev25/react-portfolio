import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Projects = () => {
  return (
    <div className="projects" id="section--projects">
      <h1 className="project-title">Personal Projects</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="content-section">
            <img alt="image1" src="./images/weather-app.png" />
            <p className="project-description">
              A responsive weather web application built using Vanilla JS with
              geolocation feature. Open the location of your device before
              opening the web app for better user experience.
            </p>
          </section>
          <section className="buttons-section">
            <a
              href="https://riandev25.github.io/js-weather-app/dist"
              class="button-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo
            </a>
            <a href class="button-project">
              Source code
            </a>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="content-section">
            <img alt="image1" src="./images/weather-app.png" />
            <p className="project-description">
              A portfolio website built using ReactJS and pure CSS.
            </p>
          </section>
          <section className="buttons-section">
            <a href class="button-project">
              Live demo
            </a>
            <a href class="button-project">
              Source code
            </a>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
