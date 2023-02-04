import React from "react";
import GoogleMap from "./GoogleMap";
import bank from "./Images/bank.jpeg";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Location = () => {
  return (
    <>
      <div
        id="LocationContainer"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${bank})`,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: 550,
        }}
      >
        <div
          id="mask"
          className="mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">Convenient Location in Naperville</h1>
              <h3 id="bottomHeroText">
                Located in the thrid floor of the Fifth Third Bank at 75th St.
                and Rickert Drive
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
            </div>
          </div>
        </div>
      </div>
      <div id="sectionHolder">
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
      </div>

      <div id="secondLayer">
        <div id="secondPhoto">
          <GoogleMap />
        </div>
        <div id="secondLayerText">
          <div id="breadcrum">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Practice
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h2>Located in the heart of Naperville</h2>
          <p>
            We promise to give you the most affordable dental care we can offer.
            We can also assist you in arranging a financing program tailored to
            your specific needs and budget.
          </p>
          <br></br> <br></br>
          <a href="/Appointment">
            <button className="circular ui icon button">
              Make an Appointment
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Location;
