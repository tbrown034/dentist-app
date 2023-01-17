import React from "react";
import Dentist from "./Images/dentist.jpeg"


const Home = () => {
    return (
      <>
      <div id="home"
        className=' img-fluid  bg-image'
        style={{ backgroundImage: `url(${Dentist})`, backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 850 }}
      >
        <div id="mask" className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div id="homeContainter">
          <div id="textContainer" >
              <h1 id="topHeroText">Let us brighten your smile.</h1>
              <h3 id="bottomHeroText">Dr. Keith A. Brown, D.D.S., F.A.G.D, is one Naperville's top and dentists, serving the Chicagoland area for more than 40 years. Let us assist you.</h3>
              <br></br>
              
              </div>
             
            <div id="buttonContainer" >
              <br></br>
            <a className='btn btn-outline-light btn-lg' href='/Appointment' role='button'>
                Make an Appointment
              </a><br/>
              <a className='btn btn-outline-light btn-lg' href='/FAQs' role='button'>
                Frequently Asked Questions
              </a>
            </div>



          </div>



     
          
        </div>
      </div>


        
      </>
    );
  };
  
  export default Home;