import brush from "./Images/toothbrush.jpeg";
import Accordion from "react-bootstrap/Accordion";
import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const FAQ = () => {
  return (
    <>
      <div
        id="financingContainer"
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
              <h1 id="topHeroText">Frequently Asked Questions</h1>
              <h3 id="bottomHeroText">
                A few of our more common questions and answers for how your
                visit will go and how much it will cost you.
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
                Meet Dr. Brown, D.D.S., F.A.G.D. <i class="arrow "></i> <i class="arrow alternate circle right
icon"></i>
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
                Emergnecy? Call Now <i class="arrow "></i> <i class="arrow alternate circle right
icon"></i>
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
                Check Your Coverage/Financing Options <i class="arrow "></i> <i class="arrow alternate circle right
icon"></i>
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
                Take a Tour <i class="arrow "></i> <i class="arrow alternate circle right
icon"></i>
              </a>
        </Segment>
      </Segment.Group>
      </div>
      <div id="secondLayer">
        <div id="leftDiv">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Why Is Visiting The Dentist So Important?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                My Teeth Feel Fine. Do I Still Need To See A Dentist?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What Should I Look For When Choosing The Right Dentist For Me?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How Can I Take Care Of My Teeth Between Dental Checkups?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                At What Age Should I Start Taking My Child To See The Dentist?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How Often Should I See The Dentist?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What Is A Cavity?</Accordion.Header>
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
        <div id="rightText">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What Is A Filling?</Accordion.Header>
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
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How Often Should I Brush My Teeth?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                When Should I Change My Toothbrush?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What Is Gum Disease?</Accordion.Header>
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
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                If I Have Braces, Do I Still Need Dental Checkups Every Six
                Months?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How Do I Schedule My Next Checkup?
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
          </Accordion>
          <br />
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Do You Except Medicaid?</Accordion.Header>
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

export default FAQ;
