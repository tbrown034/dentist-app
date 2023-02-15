import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Slider1() {
  return (
    <>
      <Swiper navigation={true} pagination={{
          type: "progressbar"
        }} speed={1400} modules={[Navigation, Pagination]} className="mySwiper" >
        <SwiperSlide><div>
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
        </div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
