import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import teeth from "./Images/dentistteeth.jpeg";
import brush from "./Images/toothbrush.jpeg";
import { Reveal } from "semantic-ui-react";
import girl from "./Images/slidersmile.jpeg";
import dentist from "./Images/dentrist7.jpeg";
import invialign from "./Images/invisalign.jpeg";
import chair from "./Images/officechair.jpeg";

function ServiceHome() {
  return (
    <div id="serviceHome">
      <div id="serviceText">
          <h1>Our Services</h1>
          <p>We provide a range of dental services to take the best care of you and your family's dental health for life.
</p>
<hr></hr>
        </div>
      <CardGroup>
        <Card className="servicesCard">

          <Reveal animated="move up">
            <Reveal.Content visible>
              <Card.Img src={chair} />
              <Card.ImgOverlay>
                <Card.Title>General Dentristry</Card.Title>
              </Card.ImgOverlay>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card.Img variant="top" src={brush} />
              <Card.ImgOverlay>
                <Card.Title>General Dentristry</Card.Title>
                <div id="serviceLinkHoldr">
                  <a href="/Location">Check-Ups</a>
                  <a href="/Location">Fillings</a>
                  <a href="/Location">Emergency</a>
                  <a href="/Location">Root Canals</a>
                  <a href="/Location">Emergency</a>
                  <a href="/Location">Childrens' Dentristry</a>
                </div>
              </Card.ImgOverlay>
            </Reveal.Content>
          </Reveal>
        </Card>
        <Card className="servicesCard">
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Card.Img variant="top" src={invialign} />
              <Card.ImgOverlay>
                <Card.Title>Cosmetic Dentristry</Card.Title>
              </Card.ImgOverlay>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card.Img variant="top" src={girl} />
              <Card.ImgOverlay>
                <Card.Title>General Dentristry</Card.Title>
                <div id="serviceLinkHoldr">
                  <li>
                    <ul>
                      <a href="/Location">Invislaign</a>
                      <a href="/Location">Veeners </a>
                      <a href="/Location">Teeth Whitening</a>
                      <a href="/Location">Bonding</a>
                      <a href="/Location">Emergency</a>
                    </ul>
                  </li>
                </div>
              </Card.ImgOverlay>
            </Reveal.Content>
          </Reveal>
        </Card>
        <Card className="servicesCard">
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Card.Img variant="top" src={teeth} />
              <Card.ImgOverlay>
                <Card.Title>Surgical Dentristry</Card.Title>
              </Card.ImgOverlay>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Card.Img variant="top" src={dentist} />
              <Card.ImgOverlay>
                <Card.Title>Surgical Dentristry</Card.Title>
                <div id="serviceLinkHoldr">
                  <a href="/Location">Extractions</a>
                  <a href="/Location">Implants</a>
                  <a href="/Location">Bridges</a>
                  <a href="/Location">Dentures</a>
                </div>
              </Card.ImgOverlay>
            </Reveal.Content>
          </Reveal>
        </Card>
      </CardGroup>
    </div>
  );
}

export default ServiceHome;
