import React from "react";
import Dentist from "./Images/dentist.jpeg"


const Home = () => {
    return (
      <>
      <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 img-fluid text-center bg-image'
        style={{ backgroundImage: `url(${Dentist})`, height: 900 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Keith A. Brown, DDS-FAGD LTD</h1>
              <h4 className='mb-3'>Serving Naperville and the surrounding area since 2000</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Make an Appointment
              </a><br/><br></br>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Frequently Asked Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>


        
      </>
    );
  };
  
  export default Home;