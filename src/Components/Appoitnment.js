import React, { useRef } from "react";
import { useState } from "react";
import { Button, Form, Select } from "semantic-ui-react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import Section from "./Section";
import Stepper from "./Stepper";
import teeth from "./Images/smile3.webp";

const options = [
  { key: "new", text: "New", value: "New" },
  { key: "return", text: "Returning", value: "Returning" },
];

const emergency = [
  { key: "No", text: "No", value: "No" },
  { key: "Yes", text: "Yes", value: "Yes" },
];

const services = [
  { key: "Check Up", text: "Check Up", value: "Check Up" },
  {
    key: "Cosmetic Dentristry",
    text: "Cosmetic Dentristry",
    value: "Cosmetic Dentristry",
  },
  {
    key: "Appointment for a Child",
    text: "Appointment for a Child",
    value: "Appointment for a Child",
  },
  { key: "Filing/Cavity", text: "Filing/Cavity", value: "Filing/Cavity" },
  { key: "Other", text: "Other", value: "Other" },
];
const HeroStyle = {
  backgroundImage: `url(${teeth})`,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  height: 550,
};

const Appointment = () => {
   // eslint-disable-next-line
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);
  const form = useRef();

  const sendEmail = (e) => {
    console.log("handleSubmit ran");
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_99v16fc",
    //     "contact_form",
    //     form.current,
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

  return (
    <>
      <div
        id="LocationContainer"
        className=" img-fluid  bg-image"
        style={HeroStyle}
      >
        <div className="mask">
          <div id="homeContainter">
            <div id="textContainer">
              <h1 id="topHeroText">Book Your Next Appointment</h1>
              <h3 id="bottomHeroText">
                Let us know how and when we can help you and we'll be back to
                you ASAP!
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
              <h2 className="secondHeader">Let's Get You Booked!</h2>
              <p className="secondText">
                We are excited to serve you! Just fill you the form below and we
                will contact you shortly after to confirm your appointment and
                answer any questions you have!
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
        <Stepper />
        <Form ref={form} onSubmit={sendEmail}>
          <h1>Request Your Appointment Today!</h1>
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
          <Form.Field
            control={Select}
            label="Is this an Emergency?"
            options={emergency}
            placeholder="Select"
          />
          <Form.Field
            control={Select}
            label="How Can We Help You?"
            options={services}
            placeholder="Select"
          />
          <Form.TextArea
            label="More Infomation"
            placeholder="Let us Know about any details or questions you have ..."
          />
          <Form.Field>
            <label>Date Requested</label>
            <SemanticDatepicker onChange={onChange} />
            <label>Back-Up Date</label>
            <SemanticDatepicker onChange={onChange} />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default Appointment;
