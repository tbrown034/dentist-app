import insurance from './Images/insurance.jpeg'
const Financing = () => {
    return (
      <>
      <div id="financingContainer"
        className=' img-fluid  bg-image'
        style={{ backgroundImage: `url(${insurance})`, backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 550 }}
      >
        <div id="mask" className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div id="homeContainter">
          <div id="textContainer" >
              <h1 id="topHeroText">Affordable Dental Care</h1>
              <h3 id="bottomHeroText">We accept most traditional insurance plans, contact our office to verify acceptance of your plan. We accept checks, cash or credit cards. We also offer a flexible payment plan. Please see our Financial Coordinator for details.
</h3>
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
  
  export default Financing;