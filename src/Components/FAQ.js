import brush from "./Images/toothbrush.jpeg";
import Accordion from "react-bootstrap/Accordion";
import dentist6 from "./Images/dentrist7.jpeg";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "react-bootstrap/Image";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const style = {
  backgroundImage: `url(${brush})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};

const maskStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
};

const accordionItems = [
  {
    header: "Why Is Visiting The Dentist So Important?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "My Teeth Feel Fine. Do I Still Need To See A Dentist?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "What Should I Look For When Choosing The Right Dentist For Me?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more items as needed
];

const accordionMap = accordionItems.map((item, index) => (
  <Accordion key={index}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>{item.header}</Accordion.Header>
      <Accordion.Body>{item.body}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
));

const FAQ = () => {
  return (
    <>
      <div
        id="financingContainer"
        className=" img-fluid bg-image"
        style={style}
      >
        <div id="mask" className="mask" style={maskStyle}>
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
        <Section />
      </div>
      <Container fluid>
        <Row className="secondLayer">
          <Col lg={7} className="col1">
            <div id="breadcrum">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  FAQs
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2 className="secondHeader">Let us answer your questions?</h2>
            <p className="secondText">
              Have questions about your visit, financing or what to expect
              before, during and after your procedure? Let us answer your
              questions. If you don't see your answer{" "}
              <a href="/Contact">Let us know!</a>
            </p>
            <a href="/Appointment">
              <button id="button2" className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </Col>
          <Col lg={5} id="col2">
            <Image className="secondPhoto" src={dentist6} fluid />
          </Col>
        </Row>
      </Container>
      <div id="thirdLayer">
        {accordionMap}
        <div></div>
      </div>
    </>
  );
};

export default FAQ;
