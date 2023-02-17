import brush from "./Images/toothbrush.jpeg";
import dentist6 from "./Images/dentrist7.jpeg";
import Section from "./Section";
import { Image, Breadcrumb, Container, Row, Col } from "react-bootstrap";
import {accordionFAQsMap} from "./Data/FAQData";


const Herostyle = {
  backgroundImage: `url(${brush})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};



const FAQ = () => {
  return (
    <>
      <div
        className=" img-fluid bg-image"
        style={Herostyle}
      >
        <div  className="mask" >
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
      <div className="serviceItems">{accordionFAQsMap}</div>
    
    </>
  );
};

export default FAQ;
