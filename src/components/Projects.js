import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Projects() {
  return (
    <div className="projects">
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
            <button class="button-project">Live demo</button>
            <button class="button-project">Source code</button>
          </section>
        </SwiperSlide>
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
            <button class="button-project">Live demo</button>
            <button class="button-project">Source code</button>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
