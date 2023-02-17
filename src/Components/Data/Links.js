import { Container, Row, Col } from "react-bootstrap";

export const LinkContainer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            <ul>
              <li>
                <a href="/Appointment">General Dentristry</a>
              </li>
              <ul>
                <li>
                  <a href="/Appointment">Routine Check-Ups</a>
                </li>
                <li>
                  <a href="/Appointment">Emergency Care</a>
                </li>
                <li>
                  <a href="/Appointment">Childrens Dentristry</a>
                </li>
                <li>
                  <a href="/Appointment">General Dentristry</a>
                </li>
                <li>
                  <a href="/Appointment">Root Canals</a>
                </li>
              </ul>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li>
                <a href="/Appointment">Cosmetic Dentristry</a>
              </li>
              <ul>
                <li>
                  <a href="/Appointment">Invisalign</a>
                </li>
                <li>
                  <a href="/Appointment">Teeth Whitening</a>
                </li>
                <li>
                  <a href="/Appointment">Bonding</a>
                </li>
                <li>
                  <a href="/Appointment">Smile Makeover</a>
                </li>
              </ul>
            </ul>
          </Col>
          <Col lg={4}>
            <ul>
              <li>
                <a href="/Appointment">Surgical Dentristry</a>
              </li>
              <ul>
                <li>
                  <a href="/Appointment">Extractions</a>
                </li>
                <li>
                  <a href="/Appointment">Implants</a>
                </li>
                <li>
                  <a href="/Appointment">Bridges</a>
                </li>
                <li>
                  <a href="/Appointment">Dentures</a>
                </li>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
