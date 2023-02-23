import Promotion1 from "./Promotion1";
import Promotion2 from "./Promotion2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Promotions = () => {
  return (
    <div className="promotions">
      <h1 id="swiperHead">
        <span>2023 Deals and Promotions</span>
      </h1>
      <Container>
        <Row>
          <Col className="promoCol1">
            <Promotion1 />
          </Col>

          <Col className="promoCol2">
            <Promotion2 />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Promotions;
