import React from "react";
import Dentist from "./Images/dentist.jpeg";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${Dentist})`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: 750,
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
                Dr. Keith A. Brown, D.D.S., F.A.G.D, is one Naperville's top and
                dentists, serving the Chicagoland area for more than 40 years.
                Schedule a cleaning or appointment today and let us assist you!
              </h3>
              <br></br>
            </div>

            <div id="buttonContainer">
              <br></br>
              <a
                className="btn btn-outline-light btn-lg"
                href="/Appointment"
                role="button"
              >
                Make an Appointment
              </a>
              <br />
              <a
                className="btn btn-outline-light btn-lg"
                href="/FAQs"
                role="button"
              >
                Frequently Asked Questions
              </a>
            </div>
          </div>
        </div>
      </div>
      <Segment.Group horizontal id="segmentGroup">
        <Segment id="segment">
          <Icon name="user md" size="big" />
          <p>40+ Years of Experience</p>
        </Segment>
        <Segment id="segment">
          <Icon name="emergency" size="big" />
          <p>24/7 Emergency Services</p>
        </Segment>
        <Segment id="segment">
          <Icon name="money bill alternate outline" size="big" />
          <p>Affordable Care</p>
        </Segment>
      </Segment.Group>
    </>
  );
};

export default Home;
