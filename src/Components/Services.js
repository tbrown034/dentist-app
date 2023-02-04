import chair from "./Images/dentalchair.jpeg";
import teeth from "./Images/dentistteeth.jpeg";
import smile from "./Images/smile3.webp";
import brush from "./Images/toothbrush.jpeg";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import dentist1 from "./Images/dentist5.jpeg";
import dentist2 from "./Images/dentist6.jpeg";
import dentist3 from "./Images/dentrist7.jpeg";
import Accordion from "react-bootstrap/Accordion";
import Section from "./Section"


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
      <div id="trioContainer">
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${brush})`,
            backgroundColor: "rgba(0, 0, 0, 0.1)"
          }}
        >
          <div id="serviceContainer">
            <h1 id="topServiceText">General Dentristry </h1>
            <h3 id="serviceLinkHoldr">
              <a href="">Check-Ups</a>
              <a href="">Fillings</a>
              <a href="">Emergency</a>
              <a href="">Root Canals</a>
              <a href="">Emergency</a>
              <a href="">Childrens' Dentristry</a>
            </h3>
          </div>
        </div>
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${smile})`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: 750,
          }}
        >
          <div id="serviceContainer">
            <h1 id="topServiceText">Cosmetic Dentristry </h1>
            <h3 id="serviceLinkHoldr">
              <li>
                <ul>
                  <a href="">Invislaign</a>
                  <a href="">Veeners </a>
                  <a href="">Teeth Whitening</a>
                  <a href="">Bonding</a>
                  <a href="">Emergency</a>
                </ul>
              </li>
            </h3>
          </div>
        </div>
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${teeth})`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: 750,
          }}
        >
          <div id="serviceContainer">
            <h1 id="topServiceText">Surgical Dentristry</h1>
            <h3 id="serviceLinkHoldr">
              <a href="">Extractions</a>
              <a href="">Implants</a>
              <a href="">Bridges</a>
              <a href="">Dentures</a>
            </h3>
          </div>
        </div>
      </div>
      <div id="serviceCategoryContainer">
        <div id="serviceTop">
          <div id="serviceText">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Services
                </Breadcrumb.Item>
                <Breadcrumb.Item active>General Dentristry</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2>General Dentristry</h2>
            <h4>
              Our goal is to have your teeth functioning normally in as short a
              time as possible.
            </h4>
            <br></br> <br></br>
            <a href="/Appointment">
              <button className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </div>
          <div id="servicePhoto">
            <Image src={dentist1} fluid />
          </div>
        </div>
        <div id="serviceFAQ">
          <Accordion id="accordionHeader" defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item id="accordionHeader" eventKey="0">
              <Accordion.Header>Routine Check-Ups</Accordion.Header>
              <Accordion.Body id="accordionBody">
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
              <Accordion.Header id="accordionHeader">
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
      </div>
      <div id="serviceCategoryContainer">
        <div id="serviceTop">
          <div id="servicePhoto">
            <Image src={dentist2} fluid />
          </div>
          <div id="serviceText">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Services
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Cosmetic Dentristry</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2>Cosmetic Dentristry</h2>
            <h4>
              We're pleased to offer our valued Naperville, IL patients a
              variety of cosmetic solutions to suit their aesthetic needs.
            </h4>
            <br></br> <br></br>
            <a href="/Appointment">
              <button className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </div>
        </div>
        <div id="serviceFAQ">
          <Accordion id="accordionHeader" defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item id="accordionHeader" eventKey="0">
              <Accordion.Header>Invisalign</Accordion.Header>
              <Accordion.Body id="accordionBody">
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
              <Accordion.Header id="accordionHeader">
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
        <div id="serviceTop">
          <div id="serviceText">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Services
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Surgical Dentristry</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2>Surgical Dentristry</h2>
            <h4>
              With nitrous oxide, headphones and a staff that cares, we are
              committed to providing safe and stress-free procedures.
            </h4>
            <br></br> <br></br>
            <a href="/Appointment">
              <button className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </div>
          <div id="servicePhoto">
            <Image src={dentist3} fluid />
          </div>
        </div>
        <div id="serviceFAQ">
          <Accordion id="accordionHeader" defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item id="accordionHeader" eventKey="0">
              <Accordion.Header>Extractions</Accordion.Header>
              <Accordion.Body id="accordionBody">
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
              <Accordion.Header id="accordionHeader">Implants</Accordion.Header>
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
