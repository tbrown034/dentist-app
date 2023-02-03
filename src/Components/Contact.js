import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import dentistwords from "./Images/dentistwords.jpeg";

import {
  Button,
  Form,
  Select,
  Segment, 
  Icon,
} from 'semantic-ui-react'

const options = [
  { key: 'new', text: 'New', value: 'New' },
  { key: 'return', text: 'Returning', value: 'Returning' },
]



const Contact = () => {
  const form = useRef();
  // const [showA, setShowA] = useState(false);
  // const toggleShowA = () => setShowA(!showA);
  
  

  const handleChange = (e, {value}) => {
    console.log("handleSubmit ran");
    e.preventDefault();


    

    emailjs
      .sendForm(
        "service_99v16fc",
        "contact_form",
        form.current,
        "oLVh7PnRrJc_IUIfK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        id="LocationContainer"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${dentistwords})`,
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
              <h1 id="topHeroText">Have Any Questions? Let us Know!</h1>
              <h3 id="bottomHeroText">
                Let us know if you have any questions or need more information
                about our office, what services we provice, financing or
                insurance questions or anything on how we can make your visit go
                as pleasently as possible!
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
          <h3>Contact Us</h3>
        <Form>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Phone</label>
      <input type="tel" placeholder='Phone' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input type="email" placeholder='Email' />
    </Form.Field>
    <Form.Field
            control={Select}
            label='Are You a New or Returning Patient?'
            options={options}
            placeholder='Select'
          />
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
    <Button type='submit' onClick={handleChange}>Submit</Button>
  </Form>
          
          </div>
        <div id="rightText">
          <h3>Ready, When You Are.</h3>
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
    </>
  );
};
export default Contact;

