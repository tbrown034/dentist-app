import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
    return (
      <>
      <MDBFooter bgColor='secondary' className='text-center text-lg-start text-muted'>
     

      <section className=''>
        <MDBContainer className='text-center text-md-start'>
          <MDBRow >
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Keith Brown, DDS-FAGD LTD
              </h6>
              <p>
                Dr. Brown has served Naperville and the surrounding community for three decades. all today and speak with our caring staff to schedule a convenient appointment.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Hours</h6>
              <p>
                <ul>
                  <li>
                    Monday & Tuesday: 9 a.m. to 5 p.m. 
                  </li>
                  <li>
                    Wednesday: 9 a.m. to 9 p.m. 
                  </li>
                  <li>
                    Thursday and Friday: 9 a.m. to 5 p.m. 
                  </li>
                  <li>
                    Weekends: 5 p.m. to 10 p.m.  
                  </li>
                </ul>
             
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Why Choose Us?</h6>
              <ul>
                <li>
                24/7 Emergency Service
                </li>
                <li>
                Free Laughing Gas Sedation (Nitrous Oxide)

                </li>
                <li>
                Digital X-Rays
                </li>
                <li>
                Anxiety-Free Environment

                </li>
                <li>
                Minimally Invasive Treatment
                </li>
              </ul>
              
        
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                1296 Rickert Dr, Naperville, IL 60540


              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
               kabdds@aol.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 630-396-8702
              </p>
              <p>
               
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}>
        © 2023
       
      </div>
    </MDBFooter>


        
      </>
    );
  };
  
  export default Footer;