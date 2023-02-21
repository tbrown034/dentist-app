import React from "react";
import Map from "./Map"
import bank from "./Images/bank.jpeg";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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
       <Section />
      </div>


      <Container fluid >
        <Row className="secondLayer">
          <Col lg={5} className="col1">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Meet Dr. Brown
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2 className="secondHeader">Located in the heart of Naperville</h2>
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
          <Col lg={7} id="col2">
            <div>
            <Map/>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!4v1676919765743!6m8!1m7!1sCAoSLEFGMVFpcE5VN3ZXUGE2TVoxN1FrY1g0YTJ2WEZ3M1ZTbWR2RkNURVpUMktx!2m2!1d41.74820708153727!2d-88.16678148740277!3f253.00565058917272!4f-18.759004074294552!5f0.7820865974627469"></iframe> */}
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Location;
