import React from "react";
import { Image, Breadcrumb, Container, Row, Col } from "react-bootstrap";
import logo from "./Images/logos.png";
import keith from "./Images/keith2.jpeg";
import Section from "./Section";

const bgStyle = {
  backgroundImage: `url(${keith})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};

const maskStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
};

const MeetDr = () => {
  return (
    <>
      <div id="Location" className="img-fluid bg-image" style={bgStyle}>
        <div id="mask" className="mask" style={maskStyle}>
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">A Doctor Who Cares</h1>
              <h3 id="bottomHeroText">
                Dr. Keith A. Brown, D.D.S., F.A.G.D, has been practicing
                dentristry for more than 40 years.
              </h3>
              <br />
            </div>

            <div id="buttonContainer">
              <br />
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
      <Container fluid>
        <Row className="secondLayer">
          <Col lg={5} className="col1">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Meet Dr. Brown</Breadcrumb.Item>
            </Breadcrumb>

            <h2 className="secondHeader">Dr. Keith Brown, D.D.S., F.A.G.D</h2>
            <p className="secondText">
              Hello, and welcome to my practice. Working in dentistry for over
              40 years, it has always been my goal to provide the highest level
              of dental care possible. By working my hardest to stay current
              with the latest techniques and technology I am devoted to giving
              all my patients the finest care with financing they can afford.
            </p>
            <a href="/Appointment">
              <button id="button2" className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </Col>
          <Col lg={7} id="col2">
            <div>
              <Image className="secondPhoto" src={logo} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MeetDr;
