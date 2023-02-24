import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Promotion1 = () => {
  const [show, setShow] = useState(true);
  const alertStyle = {
    backgroundColor: '#e1d8d8',
    color: '#708a99'
  };
  return (
    <div >
      <Alert style={alertStyle} show={show}>
        <h3 className="promoTop">Free Emergency Exam and Consultation</h3>
        <p className="promoBody">
          Plus: Free crown, root canal and extraction consultations (not
          including X-rays). Come on in, we'll check out your teeth with no
          obligation!
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
      {!show && (
        <button id="confirmButton" className="btn btn-outline-dark btn-lg rounded-pill" onClick={() => setShow(true)}>Nevermind! Show me Again!</button>
      )}
    </div>
  );
};

export default Promotion1;
