import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import brush from "./Images/toothbrush.jpeg";
import { Reveal } from "semantic-ui-react";
import invialign from "./Images/invisalign.jpeg";
import chair from "./Images/officechair.jpeg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ServiceHome() {
  return (
    <div id="serviceHome">
      <div id="serviceText">
        <h2>Our Services</h2>
        <p>
          We provide a range of dental services to take the best care of you and
          your family's dental health for life.
        </p>
        <br></br>
      </div>
      <CardGroup>
        <Row xl={3} md={1} sm={1} xs={"auto"} className="g-4">
          <Col>
            <Card id="cardBackground" className="servicesCard">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Card.Img variant="top" className="cardPhoto" src={brush} />
                  <Card.ImgOverlay>
                    <Card.Title className="cardTitle">
                      General Dentristry
                    </Card.Title>
                  </Card.ImgOverlay>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Img
                    variant="top"
                    className="backCardPhoto"
                    src={brush}
                  />
                  <Card.ImgOverlay id="serviceLinkHoldr">
                      <a href="/Location">Check-Ups</a>
                      <a href="/Location">Fillings</a>
                      <a href="/Location">Emergency</a>
                      <a href="/Location">Root Canals</a>
                      <a href="/Location">Childrens' Dentristry</a>
                      <a href="/Location">More</a>
                    
                  </Card.ImgOverlay>
                </Reveal.Content>
              </Reveal>
            </Card>
          </Col>
          <Col>
            <Card id="cardBackground" className="servicesCard">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Card.Img
                    className="cardPhoto"
                    variant="top"
                    src={invialign}
                  />
                  <Card.ImgOverlay>
                    <Card.Title className="cardTitle">
                      Cosmetic Dentristry
                    </Card.Title>
                  </Card.ImgOverlay>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Img
                    className="backCardPhoto"
                    variant="top"
                    src={invialign}
                  />
                  <Card.ImgOverlay id="serviceLinkHoldr">
                    
                          <a href="/Services">Invislaign</a>
                          <a href="/Location">Veeners </a>
                          <a href="/Location">Teeth Whitening</a>
                          <a href="/Location">Bonding</a>
                          <a href="/Location">Emergency</a>
                          <a href="/Location">More</a>
                    
                  </Card.ImgOverlay>
                </Reveal.Content>
              </Reveal>
            </Card>
          </Col>
          <Col>
            <Card id="cardBackground" className="servicesCard">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Card.Img className="cardPhoto" variant="top" src={chair} />
                  <Card.ImgOverlay>
                    <Card.Title className="cardTitle">
                      Surgical Dentristry
                    </Card.Title>
                  </Card.ImgOverlay>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Img
                    className="backCardPhoto"
                    variant="top"
                    src={chair}
                  />
                  <Card.ImgOverlay id="serviceLinkHoldr">
                    
                      <a href="/Location">Extractions</a>
                      <a href="/Location">Implants</a>
                      <a href="/Location">Bridges</a>
                      <a href="/Location">Dentures</a>
                      <a href="/Location">More</a>
                    
                  </Card.ImgOverlay>
                </Reveal.Content>
              </Reveal>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </div>
  );
}

export default ServiceHome;
