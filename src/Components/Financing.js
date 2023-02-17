import insurance from "./Images/insurance.jpeg";
import careCredit from "./Images/careCredit.webp";
import Image from "react-bootstrap/Image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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
                  Financing
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h2 className="secondHeader">Financing Made Easy</h2>
            <p className="secondText">We promise to give you the most affordable dental care we can offer.
            We can also assist you in arranging a financing program tailored to
            your specific needs and budget.</p>
            <ul className="secondList">
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
            
            <a href="/Appointment">
              <button id="button2" className="circular ui icon button">
                Make an Appointment
              </button>
            </a>
          </Col>
          <Col lg={5} id="col2">
              <Image className="secondPhoto" src={careCredit} fluid />
          </Col>
        </Row>
      </Container>



    </>
  );
};

export default Financing;
