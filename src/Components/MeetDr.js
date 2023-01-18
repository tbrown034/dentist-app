import React from "react";
import Image from "react-bootstrap/Image";
import logo from "./Images/logos.png"

import keith from "./Images/keith2.jpeg"



const MeetDr = () => {
    return (
      <>
       <div id="Location"
        className=' img-fluid  bg-image'
        style={{ backgroundImage: `url(${keith})`, backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 550 }}
      >
        <div id="mask" className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div id="homeContainter">
          <div id="textContainer" >
              <h1 id="topHeroText">A Doctor Who Cares</h1>
              <h3 id="bottomHeroText">Dr. Keith A. Brown, D.D.S., F.A.G.D, has been practicing dentristry for more than 40 years. </h3>
              <br></br>
              
              </div>
             
            <div id="buttonContainer" >
              <br></br>
            <a className='btn btn-outline-light btn-lg' href='/Appointment' role='button'>
                Make an Appointment
              </a>
            </div>



          </div>



     
          
        </div>
      </div>
      <div id="secondLayer">
      <div id="leftDiv">
        <Image
                src={logo}
                fluid
                alt="careCredit"
              ></Image>
        </div>
        <div  id="rightText">
          <h3>About Dr. Brown</h3>
          <p>Hello, and welcome to my practice. Working in dentistry for over 40 years, it has always been my goal to provide the highest level of dental care possible. By working my hardest to stay current with the latest techniques and technology I am devoted to giving all my patients the finest care with financing they can afford.
</p><br></br><br></br>
<p>I strive daily to make sure that my patients are comfortable, informed and happy with their treatment. Your smile and how you feel are what is most important to me, and I will go out of my way to make sure that you feel at home in my office. I will do everything within my power to give you the dental care you deserve.
</p>
          
        </div>
       
      </div>
      
      </>
    );
  };
  
  export default MeetDr;