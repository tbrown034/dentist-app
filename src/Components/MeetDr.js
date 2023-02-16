import React from "react";
import Image from "react-bootstrap/Image";
import logo from "./Images/logos.png";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import keith from "./Images/keith2.jpeg";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
;


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
      <Container fluid >
        <Row className="secondLayer">
          <Col lg={7} className="col1">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Meet Dr. Brown
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2 className="secondHeader">Dr. Keith Brown, D.D.S., F.A.G.D</h2>
            <p className="secondText">
            Hello, and welcome to my practice. Working in dentistry for over 40
            years, it has always been my goal to provide the highest level of
            dental care possible. By working my hardest to stay current with the
            latest techniques and technology I am devoted to giving all my
            patients the finest care with financing they can afford.
          </p>
            <a href="/Appointment">
              <button id="button2" className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </Col>
          <Col lg={5} id="col2">
            <div id="secondPhoto">
              <Image src={logo} fluid />
            </div>
          </Col>
        </Row>
      </Container>
      
      

    </>
  );
};

export default MeetDr;
