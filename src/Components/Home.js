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
      <Segment.Group horizontal id="segmentGroup">
        <Segment id="segment">
          <Icon name="user md" size="big" />
          <p>40+ Years of Experience</p>
          <a
            className="btn btn-outline-light btn-lg rounded-pill"
            href="/Appointment"
            role="button"
          >
            Meet Dr. Brown, D.D.S., F.A.G.D. <i class="arrow "></i>{" "}
            <i
              class="arrow alternate circle right
icon"
            ></i>
          </a>
        </Segment>
        <Segment id="segment">
          <Icon name="emergency" size="big" />
          <p>24/7 Emergency Services</p>
          <a
            className="btn btn-outline-light btn-lg rounded-pill"
            href="/Appointment"
            role="button"
          >
            Emergnecy? Call Now <i class="arrow "></i>{" "}
            <i
              class="arrow alternate circle right
icon"
            ></i>
          </a>
        </Segment>
        <Segment id="segment">
          <Icon name="money bill alternate outline" size="big" />
          <p>Affordable Care</p>
          <a
            className="btn btn-outline-light btn-lg rounded-pill"
            href="/Appointment"
            role="button"
          >
            Check Your Coverage/Financing Options <i class="arrow "></i>{" "}
            <i
              class="arrow alternate circle right
icon"
            ></i>
          </a>
        </Segment>
        <Segment id="segment">
          <Icon name="heartbeat" size="big" />
          <p>State of the Art Facilites</p>
          <a
            className="btn btn-outline-light btn-lg rounded-pill"
            href="/Appointment"
            role="button"
          >
            Take a Tour <i class="arrow "></i>{" "}
            <i
              class="arrow alternate circle right
icon"
            ></i>
          </a>
        </Segment>
      </Segment.Group>
    </>
  );
};

export default Home;
