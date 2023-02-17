import chair from "./Images/dentalchair.jpeg";
import teeth from "./Images/dentistteeth.jpeg";
import smile from "./Images/smile.jpeg";
import general from "./Images/slidersmile.jpeg"
import brush from "./Images/toothbrush.jpeg";
import { Image } from "semantic-ui-react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import dentist1 from "./Images/dentist5.jpeg";
import dentist2 from "./Images/dentist6.jpeg";
import dentist3 from "./Images/dentrist7.jpeg";
import Accordion from "react-bootstrap/Accordion";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Services = () => {
  return (
    <>
      <div
        id="LocationContainer"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${chair})`,
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

      <Container fluid >
        <Row className="secondLayer">
          <Col lg={7} className="col1">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Services
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2 className="secondHeader">A Full Service Dentist</h2>
            <p className="secondText">Whatever your need for Naperville, IL, dental care, you’ll find us ready to serve you at Keith A. Brown DDS-FAGD Ltd. We use the latest techniques and state-of-the-art dental materials to deliver our services. We also provide root canal therapy with treatments completed in just one visit.</p>

            <Container>
              <Row>
                <Col lg={4}>
                <ul>
              <li><a href="/Appointment">General Dentristry</a></li>
              <ul>
              <li><a href="/Appointment">Routine Check-Ups</a></li>
              <li><a href="/Appointment">Emergency Care</a></li>
              <li><a href="/Appointment">Childrens Dentristry</a></li>
              <li><a href="/Appointment">General Dentristry</a></li>
              <li><a href="/Appointment">Root Canals</a></li>
              </ul>
              </ul>
                </Col>
                <Col lg={4}>
                <ul>
              <li><a href="/Appointment">Cosmetic Dentristry</a></li>
              <ul>
              <li><a href="/Appointment">Invisalign</a></li>
              <li><a href="/Appointment">Teeth Whitening</a></li>
              <li><a href="/Appointment">Bonding</a></li>
              <li><a href="/Appointment">Smile Makeover</a></li>
              </ul>
              </ul>
                
                </Col>
                <Col lg={4}>
                <ul>
              <li><a href="/Appointment">Surgical Dentristry</a></li>
              <ul>
              <li><a href="/Appointment">Extractions</a></li>
              <li><a href="/Appointment">Implants</a></li>
              <li><a href="/Appointment">Bridges</a></li>
              <li><a href="/Appointment">Dentures</a></li>
              </ul>
              </ul>
                </Col>
              </Row>
            </Container>
            

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

      <Container fluid >
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











     
        
        <div className="serviceFAQ">
          <Accordion className="accordionHeader" defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item className="accordionHeader" eventKey="0">
              <Accordion.Header>Routine Check-Ups</Accordion.Header>
              <Accordion.Body className="accordionBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>



            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordionHeader">
                Emergency Care
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Childrens' Care</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Root Canals</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Filings</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>


      <div id="serviceCategoryContainer">
      <Container fluid >
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
            Our goal is to have your teeth functioning normally in as short a
              time as possible.
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
        <div className="serviceFAQ">
          <Accordion className="accordionHeader" defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item className="accordionHeader" eventKey="0">
              <Accordion.Header>Invisalign</Accordion.Header>
              <Accordion.Body className="accordionBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordionHeader">
                Teeth Whitening
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Bonding</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Smile Makeover</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <div id="serviceCategoryContainer">
      <Container fluid >
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
        <div id="serviceFAQ">
          <Accordion className="accordionHeader" defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item className="accordionHeader" eventKey="0">
              <Accordion.Header>Extractions</Accordion.Header>
              <Accordion.Body className="accordionBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordionHeader">Implants</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Bridges</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Dentures</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Services;
