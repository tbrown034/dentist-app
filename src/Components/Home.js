import React from "react";
import Dentist from "./Images/dentist.jpeg"


const Home = () => {
    return (
      <>
      <div id="home"
        className=' img-fluid text-center bg-image'
        style={{ backgroundImage: `url(${Dentist})`, backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 800 }}
      >
        <div id="mask" className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div id="homeContainter">
          <div id="textContainer" >
              <h1 id="topText">Let us Brighten your Smile</h1>
              <h3>Dr. Keith Brown, DDS-FAGD, has served the Naperville area for more than three decades. </h3>
              <p>Whether you need 24/7 emegency care, a routine check-up (both kids and adults!) or issues with pain or discomfot, Dr. Brown provides a low-anxiety atmosphere to get your smile shining again. </p>
              </div>
             
            <div id="buttonContainer" >
              <br></br>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Make an Appointment
              </a><br/>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
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