import React from "react";
import bank from "./Images/bank.jpeg"

const Location = () => {
    return (
      <>
      <div id="Location"
        className=' img-fluid  bg-image'
        style={{ backgroundImage: `url(${bank})`, backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 850 }}
      >
        <div id="mask" className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div id="homeContainter">
          <div id="textContainer" >
              <h1 id="topHeroText">Convient Location</h1>
              <h3 id="bottomHeroText">Located in the thrid floor of the Fifth Third Bank at 75th St. and Rickert Drive</h3>
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
  
  export default Location;