import React from "react";
import Image from "react-bootstrap/Image";
import logo from "./Images/logos.png";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import keith from "./Images/keith2.jpeg";

import Section from "./Section"


const MeetDr = () => {
  return (
    <>
      <div
        id="Location"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${keith})`,
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
              <h1 id="topHeroText">A Doctor Who Cares</h1>
              <h3 id="bottomHeroText">
                Dr. Keith A. Brown, D.D.S., F.A.G.D, has been practicing
                dentristry for more than 40 years.{" "}
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
        <Section />
      </div>
      <div id="secondLayer">
        <div id="secondPhoto">
          <Image src={logo} fluid />
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
          <h2>About Dr. Keith Brown, D.D.S., F.A.G.D</h2>
          <p>
            Hello, and welcome to my practice. Working in dentistry for over 40
            years, it has always been my goal to provide the highest level of
            dental care possible. By working my hardest to stay current with the
            latest techniques and technology I am devoted to giving all my
            patients the finest care with financing they can afford.
          </p>
          <br></br>
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

export default MeetDr;
