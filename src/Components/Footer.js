import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <MDBFooter className="footer">
        <section>
          <MDBContainer className="text-center text-md-start">
            <MDBRow>
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
                <h2>Dental Services</h2>
                <h4>General</h4>
                <h4>Cosmetic</h4>
                <h4>Surigcal</h4>
                <h4>FAQs</h4>
                <h4>Financing</h4>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-4">
                <h2>Office Hours</h2>
                <h4>
                  <Icon
                    icon="material-symbols:calendar-month"
                    style={{ marginRight: "5px" }}
                  />
                  Monday & Tuesday: 9 a.m. to 5 p.m.
                </h4>
                <h4>
                  <Icon
                    icon="material-symbols:calendar-month"
                    style={{ marginRight: "5px" }}
                  />
                  Wednesday: 9 a.m. to 9 p.m.
                </h4>
                <h4>
                  <Icon
                    icon="material-symbols:calendar-month"
                    style={{ marginRight: "5px" }}
                  />
                  Thursday & Friday: 9 a.m. to 5 p.m.
                </h4>
                <h4>
                  <Icon
                    icon="material-symbols:calendar-month"
                    style={{ marginRight: "5px" }}
                  />
                  Weekends: 5 p.m. to p.m.
                </h4>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto  mb-4">
                <h2>Contact</h2>
                <h4>
                  <MDBIcon icon="home" className="me-2" />
                  1296 Rickert Dr, Naperville, IL 60540
                </h4>
                <h4>
                  <MDBIcon icon="envelope" className="me-3" />
                  kabdds@aol.com
                </h4>
                <h4>
                  <MDBIcon icon="phone" className="me-3" /> 630-396-8702
                </h4>
                <h4>
                  <MDBIcon icon="fax" className="me-3" /> 630-396-8703
                </h4>
                <h4>
                  <MDBIcon fab icon="facebook-f" className="me-3" /> Facebook
                </h4>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className="text-center p-1">© 2023 Keith Brown D.D.S.</div>
      </MDBFooter>
    </>
  );
};

export default Footer;
