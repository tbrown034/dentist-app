import Accordion from "react-bootstrap/Accordion";

const accordionGeneral = [
  {
    header: "Routine Check-ups",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Emergency Care",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Childrens' Care",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Root Canals",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Fillings",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more items as needed
];

const accordionCosmetic = [
  {
    header: "Invisalign",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Teeth Whitening",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Bonding",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Smile Makeover",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more items as needed
];

const accordionSurgical = [
  {
    header: "Extractions",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Implants",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Bridges",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Dentures",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  // Add more items as needed
];

export const accordionGeneralMap = accordionGeneral.map((item, index) => (
  <Accordion alwaysOpen key={index}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>{item.header}</Accordion.Header>
      <Accordion.Body>{item.body}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
));

export const accordionCosmeticMap = accordionCosmetic.map((item, index) => (
  <Accordion alwaysOpen key={index}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>{item.header}</Accordion.Header>
      <Accordion.Body>{item.body}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
));

export const accordionSurgicalMap = accordionSurgical.map((item, index) => (
  <Accordion alwaysOpen key={index}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>{item.header}</Accordion.Header>
      <Accordion.Body>{item.body}</Accordion.Body>
    </Accordion.Item>
  </Accordion>
));
