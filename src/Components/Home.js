import React from "react";
import Section from "./Section";
import Slider1 from "./Slider";
import "../index.css";
import Promotions from "./Promotions";
import Map from "./Map";
import ServiceHome from "./ServiceHome";
import homePhoto from "./Images/dentist.jpeg";

const HeroStyle = {
  backgroundImage: `url(${homePhoto})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 650,
};

const Home = () => {
  return (
    <main>
      <div id="totalContain" className="img-fluid bg-image" style={HeroStyle}>
        <div className="mask">
          <div id="homeContainer">
            <div id="textContainer">
              <h1 id="topHeroText">Let us brigten your smile. </h1>
              <h3 id="bottomHeroText">
                Dr. Keith A. Brown has been serving Napeville and the
                Chicagoland area for more than 40 years. Schedule a cleaning or
                appointment today!
              </h3>
              <div id="buttonContainer">
                <a
                  className="btn btn-outline-light btn-lg rounded-pill"
                  href="/Appointment"
                  role="button"
                  id="homeButton"
                >
                  Make an Appointment
                </a>
                <a
                  className="btn btn-outline-light btn-lg rounded-pill"
                  href="/Appointment"
                  role="button"
                  id="homeButton2"
                >
                  Call Us At (630) 396-8702
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section />
      <Slider1 />
      <ServiceHome />
      <Promotions />
      <Map />
      <style>{`
        @media (max-width: 768px) {
          #totalContain {
            height: 1650px;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
