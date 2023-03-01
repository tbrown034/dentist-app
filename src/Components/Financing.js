import { Breadcrumb, Col, Container, Image, Row } from "react-bootstrap";
import insurance from "./Images/insurance.jpeg";
import Section from "./Section";
import financing from "./Images/financing.jpeg";
import Promotions from "./Promotions";
import care from "./Images/cc6png.png";
import citi from "./Images/citi_logo.png";
import { Item } from "semantic-ui-react";

const heroStyle = {
  backgroundImage: `url(${insurance})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};

const Financing = () => {
  return (
    <>
      <div
        id="financingContainer"
        className="img-fluid  bg-image"
        style={heroStyle}
      >
        <div className="mask">
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">Affordable Dental Care</h1>
              <h3 id="bottomHeroText">
                We promise to give you the most affordable dental care we can
                offer. We can also assist you in finding a financing program
                tailored to your needs and budget.
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
      <Container className="secondContainer" fluid>
        <Row className="secondLayer">
          <Col className="col1">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Financing
              </Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="secondHeader">Financing Made Easy</h2>
            <p className="secondText">
              We promise to give you the most affordable dental care we can
              offer. We can also assist you in arranging a financing program
              tailored to your specific needs and budget.<br></br>
              <br></br> We accept most traditional insurance plans, contact our
              office to verify acceptance of your plan. We also accept checks,
              cash or credit cards, and we offer a flexible payment plan. We,
              however, are not accepting Medicad at this time.
            </p>

            
          </Col>
          <Col lg={5} id="col2">
            <Image className="secondPhoto" src={financing} fluid />
          </Col>
        </Row>
      </Container>
      <div id="financeText">
        <h2>No Insurance, No Problem</h2>
        <p>
          Whether you don't have dental insurance or your plan doesn't cover
          certain procedures, we are ready to help and advise you on a variety
          of financial services. Each service offers No Interest or Low Interest
          financing and low minimum monthly payment options, so you can get the
          treatment you want, when you want it. Our Financial Coordinator can
          walk you through the application process for{" "}
          <a href="https://www.carecredit.com/">Care Credit</a> or{" "}
          <a href="https://www.citibenefits.com/">Citi Benefits </a> Health
          financing options. See more details below.
        </p>
        <br></br>
      </div>
      <Item.Group className="financeGroup">
        <Item id="topItem">
          <Item.Image size="large" src={care} />

          <Item.Content>
            <Item.Header className="itemHead" as="a">Care Credit</Item.Header>

            <Item.Description>
              Whether you use your healthcare credit card to pay for
              deductibles, or for treatments and procedures not covered by
              insurance*, CareCredit helps make the health, wellness and beauty
              treatments and procedures you want possible today.
            </Item.Description>
            <Item.Extra>*Subject to credit approval.</Item.Extra>
          </Item.Content>
        </Item>
        <Item id="bottomItem">
          <Item.Image size="large" src={citi} />

          <Item.Content>
            <Item.Header className="itemHead" as="a">Citi Benefits</Item.Header>

            <Item.Description>
            Your needs are unique to you, so Citi provides you with different medical options from which to choose. Each plan offers comprehensive benefits to help you and your family stay healthy throughout the year.


            </Item.Description>
          
          </Item.Content>
        </Item>
      </Item.Group>

      <Promotions />
    </>
  );
};

export default Financing;
