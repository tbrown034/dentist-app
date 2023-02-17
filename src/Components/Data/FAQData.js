import Accordion from "react-bootstrap/Accordion";



const accordionFAQs = [
    {
      header: "Why Is Visiting The Dentist So Important?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      header: "My Teeth Feel Fine. Do I Still Need To See A Dentist?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      header: "What Should I Look For When Choosing The Right Dentist For Me?",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more items as needed
  ];
  
  export const accordionFAQsMap = accordionFAQs.map((item, index) => (
    <Accordion key={index}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ));