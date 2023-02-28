import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MDBIcon } from "mdb-react-ui-kit";
import smile3 from "./Images/smile3.webp";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import Rating from "@mui/material/Rating";

export default function Slider1() {
  return (
    <>
      <Container id="bigContain" fluid>
        <Row>
          <Col  xl={6}  md={12}>
            <h1 id="swiperHead">
              <span> Hear from our patients </span>
            </h1>
            <Swiper
              autoplay={{
                delay: 4500,
              }}
             
              navigation={true}
              pagination={{
                dynamicBullets: true,
              }}
              speed={1400}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="slideContents">
                <p>
                  <MDBIcon fas icon="quote-left" />
                  I have been receiving dental care from Dr. Brown for 17 years.
                  I truly believe he is the best in the business. He is a
                  perfectionist in his work. I highly recommend him and his
                  staff.
                  <MDBIcon fas icon="quote-right" />{" "}
                </p>
                <h4> - Mike L.</h4>
                <h5>Napeville, IL</h5>

                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  size="large" 
                />
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  <MDBIcon fas icon="quote-left" />
                  I initially came here with a dental crisis and needed an
                  emergency appointment. It's out of network for me but they did
                  everything they could with the insurance and I've gotten
                  excellent care. Instead of losing some teeth I have teeth that
                  look really good.
                  <MDBIcon fas icon="quote-right" />
                </p>
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  size="large" 
                />

                <h4>- Mike C..</h4>
                <h5>Markham, IL</h5>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  <MDBIcon fas icon="quote-left" />
                  Dr. Brown made me a total new set of dentures that attaches to
                  mini implants. Now, I can eat sandwiches, grilled meats, BBQ
                  ribs, steaks, and all kinds of hard foods. If you are having
                  problems with your dentures, I would recommended Dr. Keith
                  Brown to anyone.
                  <MDBIcon fas icon="quote-right" />{" "}
                </p>
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  size="large" 
                />
                <h4>- Mattie P W.</h4>
                <h5>Bolingbrook, ILL</h5>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col  className="col2">
            <Image id="sliderImage" thumbnail src={smile3} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
