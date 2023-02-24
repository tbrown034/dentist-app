import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


const Promotion2 = () => {
    const [show, setShow] = useState(true);
    const alertStyle = {
        backgroundColor: '#e1d8d8',
        color: '#708a99'
      };
  return (
    <div>
        <Alert style={alertStyle} show={show} >
        <h3 className="promoTop">Free Virtual Before & After Picture</h3>
        <p className="promoBody" >
          With any cosmetic procedure, we will use our latest technology to provide you with a clear view of what you'll be getting. No purchase required. 
        </p>
     
        <div className="buttonGroup">
        <a href="/Appointment">
        <button id="confirmButton" className="btn btn-outline-dark btn-lg rounded-pill">
              Get the Deal, Make an Appointment!
            </button>
            </a>
            
            <button id="rejectButton" className="btn btn-outline-dark btn-lg rounded-pill"
            onClick={() => setShow(false)}
            style={{ marginLeft: 20 }}
          >
            No Thanks, not intereted.
          </button>
        </div>
      </Alert>
      {!show && <button id="confirmButton" className="btn btn-outline-dark btn-lg rounded-pill" onClick={() => setShow(true)}>Nevermind! Show me Again!</button>}
      </div>
  );
}

export default Promotion2;
