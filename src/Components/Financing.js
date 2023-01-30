import insurance from "./Images/insurance.jpeg";
import careCredit from "./Images/careCredit.webp";
import Image from "react-bootstrap/Image";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const Financing = () => {
  return (
    <>
      <div
        id="financingContainer"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${insurance})`,
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
              <h1 id="topHeroText">Affordable Dental Care</h1>
              <h3 id="bottomHeroText">
                We accept most traditional insurance plans, contact our office
                to verify acceptance of your plan. We accept checks, cash or
                credit cards. We also offer a flexible payment plan. Please see
                our Financial Coordinator for details.
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
      <div id="secondLayer">
        <div id="leftDiv">
          <Image src={careCredit} fluid alt="careCredit"></Image>
        </div>
        <div id="rightText">
          <h3>Financing Made Easy</h3>
          <p>
            We promise to give you the most affordable dental care we can offer.
            We can also assist you in arranging a financing program tailored to
            your specific needs and budget.
          </p>
          <ul>
            <li>
              We accept most traditional insurance plans, contact our office to
              verify acceptance of your plan.
            </li>
            <li>
              We accept checks, cash or credit cards. We also offer a flexible
              payment plan.
            </li>
            <li>
              We also can advise you on a variety of financial services to help
              you pay for treatments and procedures your insurance doesn’t
              cover.
            </li>
            <li>
              Each service offers No Interest or Low Interest financing and low
              minimum monthly payment options, so you can get the treatment you
              want, when you want it.
            </li>
            <li>
              Our Financial Coordinator can walk you through the application
              process for Care Credit or Citi Health financing options.
            </li>
          </ul>
        </div>
      </div>
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

export default Financing;
