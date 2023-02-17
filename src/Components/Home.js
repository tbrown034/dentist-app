import React from "react";
import Section from "./Section";
import Slider1 from "./Slider";
import "../index.css";


const Home = () => {
  return (
    <main id="home">
      <header className="bg-image">
        <div className="mask">
          <div id="homeContainer">
            <div id="textContainer">
              <h1 id="topHeroText">Let us brighten your smile.</h1>
              <h3 id="bottomHeroText">
                Dr. Keith A. Brown has been serving Napeville and the
                Chicagoland area for more than 40 years. Schedule a cleaning or
                appointment today!
              </h3>
              <br />
            </div>
            <div id="buttonContainer">
              <br />
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
      </header>
      <Section />
      <Slider1 />
    </main>
  );
};

export default Home;
