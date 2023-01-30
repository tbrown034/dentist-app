import practicePhoto from "./Images/practice.jpeg";
import hepa from "./Images/HEPA.jpeg";
import Image from "react-bootstrap/Image";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const Practice = () => {
  return (
    <>
      <div
        id="LocationContainer"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${practicePhoto})`,
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
              <h1 id="topHeroText">Committed to Your Health and Safety</h1>
              <h3 id="bottomHeroText">
                Dr. Brown and his staff has helped serve hundreds of patients in
                the Naperville and greater Chicagoland area since 1994.
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
          <Image src={hepa} fluid alt="careCredit"></Image>
        </div>
        <div id="rightText">
          <h3>Your Safety, First.</h3>
          <ul>
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

export default Practice;
