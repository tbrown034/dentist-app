import React from "react";
import Image from "react-bootstrap/Image";

import bank from "./Images/bank.jpeg";
import map from "./Images/dummymap.png"

const Location = () => {
  return (
    <>
      <div
        id="LocationContainer"
        className=" img-fluid  bg-image"
        style={{
          backgroundImage: `url(${bank})`,
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
              <h1 id="topHeroText">Convenient Location in Naperville</h1>
              <h3 id="bottomHeroText">
                Located in the thrid floor of the Fifth Third Bank at 75th St.
                and Rickert Drive
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
      <div id="secondLayer">
      <div id="leftDiv">
        <Image
                src={map}
                fluid
                alt="careCredit"
              ></Image>
        </div>
        <div  id="rightText">
          <h3>Easy Location</h3>
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

export default Location;
