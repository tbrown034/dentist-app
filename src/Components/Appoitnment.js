import React, { useRef } from "react";
import { useState } from "react";
// import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import teeth from './Images/smile3.webp'

const Appointment = () => {
  const form = useRef();
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

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
        style={{
          backgroundImage: `url(${teeth})`,
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
              <h1 id="topHeroText">Book Your Next Appointment</h1>
              <h3 id="bottomHeroText">
                Let us know how and when we can help you and we'll be back to you ASAP!
              </h3>
              <br></br>
            </div>

           
          </div>
        </div>
      </div>
            <div id="secondLayer">
      <div id="leftDiv">
      <div id="appointmentForm">
      <form id="contactForm" ref={form} onSubmit={sendEmail}>    
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
        <input type="date" name="date"   />
        <lable>Back-Up Date</lable>
        <input type="date" name="date"   />
        
        <fieldset/>
      </form>
<div id="contactButtonContain">
      <Button
        form="contactForm"
        type="submit"
        value="send"
        onClick={toggleShowA}
        className="mb-2"
        id="contactMe"
        
      >
        Send
      </Button>
      </div>
      <Toast delay="14000" show={showA} autohide="true" onClose={toggleShowA}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>
          Thanks for sending your message! I'll get back to you ASAP! - Trevor
        </Toast.Body>
      </Toast>
      
    </div>
        </div>
        <div  id="rightText">
          <h3>Ready, When You Are.</h3>
          <p>We promise to give you the most affordable dental care we can offer. We can also assist you in arranging a financing program tailored to your specific needs and budget.</p>
          <ul>
            <li>We accept most traditional insurance plans, contact our office to verify acceptance of your plan.</li>
            <li>We accept checks, cash or credit cards. We also offer a flexible payment plan.</li>
            <li>We also can advise you on a variety of financial services to help you pay for treatments and procedures your insurance doesn’t cover. 
</li>
            <li>Each service offers No Interest or Low Interest financing and low minimum monthly payment options, so you can get the treatment you want, when you want it.</li>
            <li>Our Financial Coordinator can walk you through the application process for Care Credit or Citi Health financing options.
</li>
          </ul>
        </div>
       
      </div>
      </>
    );
  };
  
  export default Appointment;