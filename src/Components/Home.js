import React from "react";
import Dentist from "./Images/dentist.jpeg";
import Reviews from './Reviews'
import Slider from "react-slick";
import Section from "./Section"
import TestimonialSlider from "./TestimonialSlider";


const Home = () => {
  return (
    <>
      <div
        id="home"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${Dentist})`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: 680,
        }}
      >
        <div
          id="mask"
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">Let us brighten your smile.</h1>
              <h3 id="bottomHeroText">
                Dr. Keith A. Brown has been serving Napeville and the
                Chicagoland area for more than 40 years. Schedule a cleaning or
                appointment today!
              </h3>
              <br></br>
            </div>

            <div id="buttonContainer">
              <br></br>
              <a
                className="btn btn-outline-light btn-lg rounded-pill"
                href="/Appointment"
                role="button"
              >
                Make an Appointment
              </a>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Section />
      <TestimonialSlider />
      
    </>
  );
};

export default Home;
