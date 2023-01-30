import chair from "./Images/dentalchair.jpeg";
import teeth from "./Images/dentistteeth.jpeg";
import smile from "./Images/smile3.webp";
import brush from "./Images/toothbrush.jpeg";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

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
                Our goal is to have your teeth functioning normally in as short
                a time as possible. We’re committed to providing comprehensive
                dental care for all our patients. We provide treatments to
                encourage the best possible dental health and cosmetic
                treatments to enhance your smile.
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
      <div id="trioContainer">
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${teeth})`,
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
                <h1 id="topHeroText">General Dentristry </h1>
                <h3 id="bottomHeroText">
                  <a href="https://www.w3schools.com">Check-Ups</a>
                  <a href="https://www.w3schools.com">Fillings</a>
                  <a href="https://www.w3schools.com">Childrens' Dentristry</a>
                  <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
                </h3>
              </div>
            </div>
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
          <div
            id="mask"
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div id="homeContainter">
              <div id="textContainer">
                <h1 id="topHeroText">Surgical Dentristry </h1>
                <h3 id="bottomHeroText">
                  <a href="https://www.w3schools.com">Check-Ups</a>
                  <a href="https://www.w3schools.com">Fillings</a>
                  <a href="https://www.w3schools.com">Childrens' Dentristry</a>
                  <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          id="LocationContainer"
          className=" img-fluid  bg-image"
          style={{
            backgroundImage: `url(${brush})`,
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
                <h1 id="topHeroText">Cosmetic Dentristry </h1>
                <h3 id="bottomHeroText">
                  <a href="https://www.w3schools.com">Check-Ups</a>
                  <a href="https://www.w3schools.com">Fillings</a>
                  <a href="https://www.w3schools.com">Childrens' Dentristry</a>
                  <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div id="sectionHolder">
        <Segment.Group horizontal id="segmentGroup">
          <Segment>
            {" "}
            <Icon name="user md" size="big" />
            <p>40+ Years of Experience</p>
          </Segment>

          <Segment>
            {" "}
            <Icon name="emergency" size="big" />
            <p>24/7 Emergency Services</p>
          </Segment>
          <Segment>
            {" "}
            <Icon name="money bill alternate outline" size="big" />
            <p>Affordable Care</p>
          </Segment>
        </Segment.Group>
      </div>
    </>
  );
};

export default Services;
