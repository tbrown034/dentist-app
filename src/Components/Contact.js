import React, { useRef } from "react";
import { Button, Form, Select } from "semantic-ui-react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Section from "./Section";
// import emailjs from "@emailjs/browser";
import dentistwords from "./Images/dentistwords.jpeg";
import { MDBIcon } from "mdb-react-ui-kit";

const options = [
  { key: "new", text: "New", value: "New" },
  { key: "return", text: "Returning", value: "Returning" },
];

const handleSubmit = (e, { value }) => {
  console.log("handleSubmit ran");
  e.preventDefault();

  // emailjs
  //   .sendForm(
  //     "service_99v16fc",
  //     "contact_form",
  //     Form.current,
  //     "oLVh7PnRrJc_IUIfK"
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  e.target.reset();
};
const HeroStyle = {
  backgroundImage: `url(${dentistwords})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};

const Contact = () => {
  const form = useRef();

  return (
    <>
      <div className="img-fluid  bg-image" style={HeroStyle}>
        <div className="mask">
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">Have Any Questions? Let us Know!</h1>
              <h3 id="bottomHeroText">
                Let us know if you have any questions or need more information
                about our office, what services we provice, financing or
                insurance questions or anything on how we can make your visit go
                as pleasently as possible!
              </h3>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div id="sectionHolder">
        <Section />
      </div>
      <div id="secondLayer">
        <Container id="contactContainer" className="secondContainer" fluid>
          <Row className="secondLayer">
            <Col>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Contact
                </Breadcrumb.Item>
              </Breadcrumb>
              <h2 className="secondHeader">Have Questions? Let us know!</h2>
              <p className="secondText">
                We understand that going to the dentist's office can be a
                stressful and confusing experience for some. That's why we are
                committed to answering all your questions before, during and
                after your visit! Let us know how we can help!
              </p>
            </Col>
            <Col id="contactCol" lg={3}>
              <h2>Contact</h2>
              <h4>
                <MDBIcon icon="home" className="me-2" />
                1296 Rickert Dr, Naperville, IL 60540
              </h4>
              <h4>
                <MDBIcon icon="envelope" className="me-3" />
                kabdds@aol.com
              </h4>
              <h4>
                <MDBIcon icon="phone" className="me-3" /> 630-396-8702
              </h4>

              <h4>
                <MDBIcon icon="fax" className="me-3" /> 630-396-8703
              </h4>
              <h4>
                <MDBIcon fab icon="facebook-f" className="me-3" /> Facebook
              </h4>
            </Col>
          </Row>
        </Container>

        <Form ref={form} onSubmit={handleSubmit}>
          <h1>Contact Us Today!</h1>
          <h2>Your Information:</h2>
          <Form.Field>
            <label>Name</label>
            <input placeholder="Name" />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input type="tel" placeholder="Phone" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </Form.Field>
          <Form.Field
            control={Select}
            label="Are You a New or Returning Patient?"
            options={options}
            placeholder="Select"
          />
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
};
export default Contact;
