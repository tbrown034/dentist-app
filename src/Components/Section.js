import { Segment, Icon } from "semantic-ui-react";

const Section = () => {
  const data = [
    {
      id: 1,
      icon: "user md",
      title: "40+ Years of Experience",
      buttonText: "Meet Dr. Brown, D.D.S., F.A.G.D.",
    },
    {
      id: 2,
      icon: "emergency",
      title: "24/7 Emergency Services",
      buttonText: "Emergency? Call Now",
    },
    {
      id: 3,
      icon: "money bill alternate outline",
      title: "Affordable Care",
      buttonText: "Check Your Financing Options",
    },
    {
      id: 4,
      icon: "heartbeat",
      title: "State of the Art Facilities",
      buttonText: "Take a Tour of our Office",
    },
  ];

  return (
    <Segment.Group horizontal id="segmentGroup">
      {data.map((item) => (
        <Segment key={item.id} id="segment">
          <Icon name={item.icon} size="big" />
          <p>{item.title}</p>
          <a
            className="btn btn-outline-light btn-lg rounded-pill"
            href="/Appointment"
            role="button"
          >
            {item.buttonText} <i className="arrow "></i>{" "}
            <i className="arrow alternate circle right icon"></i>
          </a>
        </Segment>
      ))}
    </Segment.Group>
  );
};

export default Section;