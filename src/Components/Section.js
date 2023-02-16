import { Segment } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
const Section = () => {
    return (
        <>
         <div id="sectionHolder">
        <Segment.Group horizontal id="segmentGroup">
          <Segment id="segment">
            <Icon name="user md" size="big" />
            <p>40+ Years of Experience</p>
            <a
              className="btn btn-outline-light btn-lg rounded-pill"
              href="/Appointment"
              role="button"
            >
              Meet Dr. Brown, D.D.S., F.A.G.D. <i class="arrow "></i>{" "}
              <i
                class="arrow alternate circle right
icon"
              ></i>
            </a>
          </Segment>
          <Segment id="segment">
            <Icon name="emergency" size="big" />
            <p>24/7 Emergency Services</p>
            <a
              className="btn btn-outline-light btn-lg rounded-pill"
              href="/Appointment"
              role="button"
            >
              Emergnecy? Call Now <i class="arrow "></i>{" "}
              <i
                class="arrow alternate circle right
icon"
              ></i>
            </a>
          </Segment>
          <Segment id="segment">
            <Icon name="money bill alternate outline" size="big" />
            <p>Affordable Care</p>
            <a
              className="btn btn-outline-light btn-lg rounded-pill"
              href="/Appointment"
              role="button"
            >
              Check Your Financing Options <i class="arrow "></i>{" "}
              <i
                class="arrow alternate circle right
icon"
              ></i>
            </a>
          </Segment>
          <Segment id="segment">
            <Icon name="heartbeat" size="big" />
            <p>State of the Art Facilites</p>
            <a
              className="btn btn-outline-light btn-lg rounded-pill"
              href="/Appointment"
              role="button"
            >
              Take a Tour of our Office<i class="arrow "></i>{" "}
              <i
                class="arrow alternate circle right
icon"
              ></i>
            </a>
          </Segment>
        </Segment.Group>
      </div>
        
        
        
        </>
    )
}

export default Section;


