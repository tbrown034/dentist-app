import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand='md' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Home</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  Financing
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  Location
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Services
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>General Dentristry</MDBDropdownItem>
                  <MDBDropdownItem link>Emergency Dentristry</MDBDropdownItem>
                  <MDBDropdownItem link>Cosmetic Dentristry </MDBDropdownItem>
                  <MDBDropdownItem link>Childrens' Dentristry </MDBDropdownItem>
                  <MDBDropdownItem link>Dental Crowns</MDBDropdownItem>
                  <MDBDropdownItem link>Dental Implants </MDBDropdownItem>
                  <MDBDropdownItem link>Whitening</MDBDropdownItem>
                  <MDBDropdownItem link>More</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            </MDBNavbarNav>
         
        <MDBBtn outline color="success" className='me-2' type='button'>
          Make an Appointment
        </MDBBtn>
        
   
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}