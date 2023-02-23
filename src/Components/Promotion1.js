import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

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

        <div className="d-flex justify-content-end">
          <a href="/Appointment">
            <Button variant="outline-info">
              Get the Deal, Make an Appointment!
            </Button>
          </a>

          <Button
            onClick={() => setShow(false)}
            variant="outline-info"
            style={{ marginLeft: 20 }}
          >
            No Thanks, not intereted.
          </Button>
        </div>
      </Alert>
      {!show && (
        <Button onClick={() => setShow(true)}>Nevermind! Show me Again!</Button>
      )}
    </div>
  );
};

export default Promotion1;
