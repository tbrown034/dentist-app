import chair from "./Images/dentalchair.jpeg";
import smile from "./Images/smile.jpeg";
import general from "./Images/slidersmile.jpeg";
import dentist1 from "./Images/dentist5.jpeg";
import dentist3 from "./Images/dentrist7.jpeg";
import Section from "./Section";
import { Image, Breadcrumb, Container, Row, Col } from "react-bootstrap";
import {LinkContainer} from "./Data/Links"
import {
  accordionGeneralMap,
  accordionCosmeticMap,
  accordionSurgicalMap,
} from "./Data/ServiceData";

const HeroStyle = {
  backgroundImage: `url(${chair})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};

const Services = () => {
  return (
    <>
      <div className=" img-fluid  bg-image" style={HeroStyle}>
        <div className="mask">
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">
                Routine Cleanings, Cosmetic Procueres and More.{" "}
              </h1>
              <h3 id="bottomHeroText">
                Our goal is to have your teeth looking great and free of pain or
                discomfort in as short a time as possible.
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

      <Container fluid>
        <Row className="secondLayer">
          <Col lg={7} className="col1">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Services
              </Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="secondHeader">A Full Service Dentist</h2>
            <p className="secondText">
              Whatever your need for Naperville, IL, dental care, you’ll find us
              ready to serve you at Keith A. Brown DDS-FAGD Ltd. We use the
              latest techniques and state-of-the-art dental materials to deliver
              our services. We also provide root canal therapy with treatments
              completed in just one visit.
            </p>
            <LinkContainer/>
            <a href="/Appointment">
              <button id="button2" className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </Col>
          <Col lg={5} id="col2">
            <Image className="secondPhoto" src={dentist3} fluid />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="secondLayer">
          <Col lg={7} id="col2">
            <div>
              <Image className="secondPhoto" src={general} fluid />
            </div>
          </Col>
          <Col lg={5} className="col1">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Services
                </Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  General Dentristry
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2 className="secondHeader">General Dentristry</h2>
            <p className="secondText">
              Our goal is to have your teeth functioning normally in as short a
              time as possible.
            </p>
            <a href="/Appointment">
              <button id="button2" className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </Col>
        </Row>
      </Container>

      <div className="serviceItems">{accordionGeneralMap}</div>

      <div id="serviceCategoryContainer">
        <Container fluid>
          <Row className="secondLayer">
            <Col lg={5} className="col1">
              <div id="breadcrum">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Services
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Cosmetic Dentristry
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <h2 className="secondHeader">Cosmetic Dentristry</h2>
              <p className="secondText">
                Our goal is to have your teeth functioning normally in as short
                a time as possible.
              </p>
              <a href="/Appointment">
                <button id="button2" className="circular ui icon button">
                  Make an Appointment
                </button>
              </a>
            </Col>
            <Col lg={7} id="col2">
              <div>
                <Image className="secondPhoto" src={smile} fluid />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="serviceItems">{accordionCosmeticMap}</div>
      </div>
      <div id="serviceCategoryContainer">
        <Container fluid>
          <Row className="secondLayer">
            <Col lg={7} id="col2">
              <div>
                <Image className="secondPhoto" src={dentist1} fluid />
              </div>
            </Col>
            <Col lg={5} className="col1">
              <div id="breadcrum">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Services
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    General Dentristry
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <h2 className="secondHeader">Surgical Dentristry</h2>
              <p className="secondText">
                Our goal is to have your teeth functioning normally in as short
                a time as possible.
              </p>
              <a href="/Appointment">
                <button id="button2" className="circular ui icon button">
                  Make an Appointment
                </button>
              </a>
            </Col>
          </Row>
        </Container>
        <div className="serviceItems">{accordionSurgicalMap}</div>
      </div>
    </>
  );
};

export default Services;
