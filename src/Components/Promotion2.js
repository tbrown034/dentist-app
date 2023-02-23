import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const Promotion2 = () => {
    const [show, setShow] = useState(true);
    const alertStyle = {
        backgroundColor: '#e1d8d8',
        color: '#708a99'
      };
  return (
    <div>
        <Alert style={alertStyle} show={show} variant="success">
        <h3 className="promoTop">Free Virtual Before & After Picture</h3>
        <p className="promoBody" >
          With any cosmetic procedure, we will use our latest technology to provide you with a clear view of what you'll be getting. No purchase required. 
        </p>
     
        <div className="d-flex justify-content-end">
        <a href="/Appointment">
              <Button variant="outline-info">
                Get the Deal, Make an Appointment!
              </Button>
            </a>
            
          <Button  onClick={() => setShow(false)} variant="outline-info" style={ {marginLeft: 20}}>
            No Thanks, not intereted.
          </Button>
        </div>
      </Alert>
      {!show && <Button onClick={() => setShow(true)}>Nevermind! Show me Again!</Button>}
      </div>
  );
}

export default Promotion2;
