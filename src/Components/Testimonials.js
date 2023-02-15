
import Carousel from 'react-bootstrap/Carousel';
import color from './Images/color.png';
import smile3 from './Images/smile3.webp'
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";


const Testimonials = () => {
    return (
        <>
        <Container  id="testimonialContainer" >
      <Row>
        <Col>
        <Image fluid src={smile3} id="testimonialPhoto"  />
        </Col>
        
        <Col>
        <Carousel fluid>
      <Carousel.Item>
        <img fluid
          className="d-block w-100"
          src={color}

          alt="First slide"
        />
        <Carousel.Caption>
        <div>
          <p>
            <MDBIcon fas icon="quote-left" />
            I have been receiving dental care from Dr. Brown for 17 years. I
            truly believe he is the best in the business. He is a perfectionist
            in his work. I highly recommend him and his staff.
            <MDBIcon fas icon="quote-right" />
            <MDBTypography 
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
          </p>
         
          <h4> - Mike L.</h4>
          <h5>Napeville, IL</h5>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={color}
          height="200"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={color}
          height="200"

          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
      </Row>
    </Container>



        
        
        </>
    )
}

export default Testimonials;