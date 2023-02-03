import chair from "./Images/dentalchair.jpeg";
import teeth from "./Images/dentistteeth.jpeg";
import smile from "./Images/smile3.webp";
import brush from "./Images/toothbrush.jpeg";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Image } from 'semantic-ui-react'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import dentist1 from "./Images/dentist5.jpeg";
import dentist2 from "./Images/dentist6.jpeg";
import dentist3 from "./Images/dentrist7.jpeg";

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
      <h1 id="thirdLayerH1">Services We Provide</h1>

      <div id="trioContainer">
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${brush})`,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: 550,
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
            height: 550,
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
            height: 550,
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
                  Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2>General Dentristry</h2>
            <h4>Our goal is to have your teeth functioning normally in as short a time as possible.</h4>
            <br></br>  <br></br>
            <a href="/Appointment">
              <button className="circular ui icon button">
                Make an Appointment
              </button>                                                                                
            </a>

          </div>
          <div id="servicePhoto"><Image src={dentist1} fluid /></div>
          <div id="serviceFAQ">
            <div id="serviceFAQtext">
              <div id="serviceFAQaccordian"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
