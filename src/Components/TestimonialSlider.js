import React from "react";
import Slider from "react-slick";
import { MDBIcon, MDBTypography } from "mdb-react-ui-kit";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplayspeed: 23000000,
    autoplay: true,
    slidesToShow: 1,
  };
  return (
    <>
      <Slider {...settings} class="sliderHolder" >
        <div class="sliderHolder">
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
        <div class="sliderHolder">
          <p>
            <MDBIcon fas icon="quote-left" />
            Dr. Brown made me a total new set of dentures that attaches to mini
            implants. Now, I can eat sandwiches, grilled meats, BBQ ribs,
            steaks, and all kinds of hard foods. If you are having problems with
            your dentures, I would recommended Dr. Keith Brown to anyone.
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
          <h4>- Mattie P W.</h4>
          <h5>Bolingbrook, IL</h5>
        </div>
        <div class="sliderHolder">
          <p>
            <MDBIcon fas icon="quote-left" />
            I initially came here with a dental crisis and needed an emergency
            appointment. It's out of network for me but they did everything they
            could with the insurance and I've gotten excellent care. My mouth
            was in horrible shape and now it's a lot better. Instead of losing
            some teeth I have teeth that look really good.
            <MDBIcon fas icon="quote-right" />
          </p>
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
          <h4>- Mike C.</h4>
          <h5>Markham, IL</h5>
        </div>
      </Slider>
    </>
  );
};

export default TestimonialSlider;
