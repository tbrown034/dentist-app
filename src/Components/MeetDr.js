import React from "react";
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
      </>
    );
  };
  
  export default MeetDr;