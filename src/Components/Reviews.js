import React from "react";
import Image from "react-bootstrap/Image";
import MikeL from "./Images/MikeL.jpeg";
import MikeC from "./Images/MikeC.jpeg";
import MattieP from "./Images/MattieP.jpeg";
import Nikkis from "./Images/Nikkis.jpeg";
import Rob from "./Images/robbyg.jpeg";

import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

const Reviews = () => {
  return (
    <>
      <div id="reviewContainer">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol>
            <div className="d-flex justify-content-center mb-4">
              <img
                src={MikeL}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Mike L.</h5>
            <p class="location">Napeville, IL</p>
    
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              I have been receiving dental care from Dr. Brown for 17 years. I
              truly believe he is the best in the business. He is a
              perfectionist in his work. I highly recommend him and his staff.{" "}
              <MDBIcon fas icon="quote-right" className="pe-2" />{" "}
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
                <MDBIcon
                  fas
                  icon="star-half-alt"
                  size="sm"
                  className="text-warning"
                />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol>
            <div className="d-flex justify-content-center mb-4">
              <img
                src={Rob}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Robby G.</h5>
            
          
            <p class="location">Willowbrook, IL</p>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              I have been receiving dental care from Dr. Brown for 17 years. I
              truly believe he is the best in the business. He is a
              perfectionist in his work. I highly recommend him and his staff.{" "}
              <MDBIcon fas icon="quote-right" className="pe-2" />{" "}
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
                <MDBIcon
                  fas
                  icon="star-half-alt"
                  size="sm"
                  className="text-warning"
                />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol>
            <div className="d-flex justify-content-center mb-4">
              <img
                src={MattieP}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Mattie P W.</h5>
            <p class="location">Bolingbrook, IL</p>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              Dr. Brown made me a total new set of dentures that attaches to
              mini implants. Now, I can eat sandwiches, grilled meats, BBQ ribs,
              steaks, and all kinds of hard foods like corn on the cob, pretzels
              and nuts, just to name a few. If you are having problems with your
              dentures, I would recommended Dr. Keith Brown to anyone. It's hard
              to find a dentist that loves his work as much as this dentist
              does. Don't wait go see Dr. Brown, you will be glad you did, I
              know I am. <MDBIcon fas icon="quote-right" className="pe-2" />
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
                <MDBIcon fas icon="star" size="sm" className="text-warning" />
              </li>
            </MDBTypography>
          </MDBCol>
          <MDBCol>
            <div className="d-flex justify-content-center mb-4">
              <img
                src={MikeC}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 className="mb-3">Mike C.</h5>
            <p class="location">Markham, IL</p>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              I initially came here with a dental crisis and needed an emergency
              appointment. It's out of network for me but they did everything
              they could with the insurance and I've gotten excellent care. My
              mouth was in horrible shape and now it's a lot better. Instead of
              losing some teeth I have teeth that look really good.{" "}
              <MDBIcon fas icon="quote-right" className="pe-2" />
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
          </MDBCol>
        </MDBRow>
      </div>
      
    </>
  );
};

export default Reviews;
