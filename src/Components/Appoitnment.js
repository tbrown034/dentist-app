import React, { useRef } from "react";
import { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import teeth from "./Images/smile3.webp";
import { Button, Form, Select } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import Section from "./Section";
import Stepper from "./Stepper"


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
        <div
          className="mask"
        >
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
        <div id="secondLayerText">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
               Appointments
              </Breadcrumb.Item>
            </Breadcrumb>
            
          
          <h2>Let's Get You Scheduled!</h2>
          <p>
            We are committed to getting you in as fast as possible to meet your needs. 
          </p>
       <Stepper />
        </div>
        <div id="secondPhoto">
          <h2>Contact Us!</h2>
          <Form ref={form} onSubmit={sendEmail}>
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
      </div>

      {/* <form id="contactForm" ref={form} onSubmit={sendEmail}>
              <label>Patient name:</label>
              <input type="text" name="patient_name" />
              <label>Your Email:</label>
              <input type="email" name="patient_email" />
              <label>Your Phone Number:</label>
              <input type="tel" name="patient_phone" />

              <input type="radio" id="css" name="fav_language" value="CSS" />

              <label>Message:</label>
              <textarea rows="8" name="message" />
              <lable>Preferred Appointment Date:</lable>
              <input type="date" name="date" />
              <lable>Back-Up Date</lable>
              <input type="date" name="date" />

              <fieldset />
            </form> */}
      {/* <div >
              <Button
                form="contactForm"
                type="submit"
                value="send"
                onClick={toggleShowA}
                id="contactMe"
              >
                Send
              </Button>
            </div> */}
      {/* <Toast
              delay="14000"
              show={showA}
              autohide="true"
              onClose={toggleShowA}
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Success!</strong>
              </Toast.Header>
              <Toast.Body>
                Thanks for sending your message! I'll get back to you ASAP! -
                Trevor
              </Toast.Body>
            </Toast> */}
    </>
  );
};

export default Appointment;
