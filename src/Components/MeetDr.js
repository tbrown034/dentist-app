import React from "react";
import { Image, Breadcrumb, Container, Row, Col } from "react-bootstrap";
import keith from "./Images/keith2.jpeg";
import Section from "./Section";
import Keith01 from "./Images/Keith_1.jpg"
import Statistics from "./Statistics"
import Logos from "./Logos"

const HeroStyle = {
  backgroundImage: `url(${keith})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};



const MeetDr = () => {
  return (
    <>
      <div id="Location" className="img-fluid bg-image" style={HeroStyle}>
        <div className="mask">
          <div id="homeContainter">
            <div id="textContainer">
              <h4 id="extraTopText">Meet Your Next Dentist</h4>
              <h1 id="topHeroText">Dr. Keith Brown</h1>
              <h3 id="bottomHeroText">
                Dr. Keith A. Brown, D.D.S., F.A.G.D, has been practicing
                dentristry in Naperville for more than 40 years.
              </h3>
              <br />
            </div>

            <div id="buttonContainer">
            <a
                  className="btn btn-outline-light btn-lg rounded-pill"
                  href="/Appointment"
                  role="button"
                  id="homeButton"
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
      <Container className="secondContainer" fluid>
        <Row className="secondLayer">
          <Col lg={7}  md={12} className="col1">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Meet Dr. Brown</Breadcrumb.Item>
            </Breadcrumb>

            <h2 className="secondHeader">More than a Typical Dentist</h2>
            <p className="secondText">
              Dr. Brown is one of just <a href="https://www.agd.org/education/awards-recognition/become-an-agd-fellow">6% of all dentists</a> in the country to become a Fellow or Master of the Academy of General Dentistry (F.A.G.D.).<br></br><br></br> And with more than 40 years of experience, you can rest assured you are in trustworthy hands. 
            </p>
            
          </Col>
          <Col   className="col2" style={{ paddingRight: 0, paddingLeft: 0 }}>
            
              <Image className="secondPhoto" thumbnail src={Keith01} fluid />
            
          </Col>
        </Row>
      </Container>
      <Statistics />
      <Logos />
    </>
  );
};

export default MeetDr;
