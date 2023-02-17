
import hepa from "./Images/HEPA.jpeg";
import { Breadcrumb, Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Section from "./Section";
import practicePhoto from "./Images/practice.jpeg";


const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.6)";
const HERO_HEIGHT = 550;
const heroStyle = {
  backgroundImage: `url(${practicePhoto})`,
  backgroundColor: BACKGROUND_COLOR,
  height: HERO_HEIGHT,
};
const maskStyle = { backgroundColor: BACKGROUND_COLOR };


const Practice = () => {
  return (
    <>
      <div className="img-fluid bg-image" style={heroStyle}>
        <div id="mask" className="mask" style={maskStyle}>
          <div id="homeContainter">
            <div className="textContainer">
              <h1 id="topHeroText">Committed to Your Health and Safety</h1>
              <h3 id="bottomHeroText">
                Dr. Brown and his staff has helped serve hundreds of patients in
                the Naperville and greater Chicagoland area since 1994.
              </h3>
              <br />
            </div>
            <div id="buttonContainer">
              <br />
              <Link to="/Appointment" className="btn btn-outline-light btn-lg">
                Make an Appointment
              </Link>
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
                  Practice
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2 className="secondHeader">Your Safety, First.</h2>
            <ul className="secondList">
              <li>Newly installed HIPA filters throughout the office</li>
              <li>UV technology in all of our patient rooms</li>
              <li>
                We will be in fully covered PPE for your protection and ours
              </li>
              <li>
                We have adjusted our schedule to Monday, Wednesdays and Fridays
                and are seeing less patients to allow time for proper
                sterilization
              </li>
              <li>We offer an isolation room if needed</li>
              <li>
                We will be taking temperatures and having you complete a COVID
                questionaire prior to your visit
              </li>
              <li>
                We will have all patient wait in their vehicle until it is your
                time to be seen to avoid interaction in the waiting room
              </li>
            </ul>
            <a href="/Appointment">
              <button id="button2" className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </Col>
          <Col lg={5} id="col2">
            <div id="secondPhoto">
              <Image src={hepa} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Practice;
