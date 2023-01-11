import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand id="navBrand" href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="leftNavBar" className="me-auto">
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#features">Financing</Nav.Link>
            <Nav.Link href="#pricing">Location</Nav.Link>
          <NavDropdown title="Dental Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  General Dentristry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cosmetic Dentristry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Endodontics and Root Canals
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Denture Implants
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Children's Dentistry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Dental Crowns
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Dental Implants
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Dental Reconstruction
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Dentures</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Invisalign
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Teeth Whitening
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Teeth Extraction
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
              </NavDropdown>
           
          </Nav>
          <Nav id="rightNavBar">
            <Nav.Link href="#memes">
              Make an Appointment
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header ;