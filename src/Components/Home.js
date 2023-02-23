import React from "react";
import Section from "./Section";
import Slider1 from "./Slider";
import "../index.css";
import homePhoto from "./Images/dentist.jpeg"
import Promotions from "./Promotions";
import Map from "./Map";
import ServiceHome from "./ServiceHome"

const HeroStyle = {
  backgroundImage: `url(${homePhoto})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};


const Home = () => {
  return (
    <main id="home">
      <header className="img-fluid bg-image" style={HeroStyle}>
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
      <ServiceHome/>

      <Promotions />
      <Map />

    </main>
  );
};

export default Home;
