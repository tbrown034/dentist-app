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
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar id="navBar" expand='md' light >
        <MDBContainer fluid>
          <MDBNavbarBrand id="brand" href='/'>Dr. Keith Brown D.D.S.</MDBNavbarBrand>
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
            <MDBNavbarNav id="headerLinks" className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Practice'>
                  Our Practice
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/MeetDr'>
                  Meet Dr. Brown
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Financing'>
                  Financing
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Location'>
                  Location
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/Contact'>
                  Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/FAQs'>
                  FAQs
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle  tag='a' className='nav-link' role='button'>
                  Services
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem  href='/Services' link>General Dentristry</MDBDropdownItem>
                  <MDBDropdownItem href='/Services' link>Emergency Dentristry</MDBDropdownItem>
                  <MDBDropdownItem href='/Services' link>Cosmetic Dentristry </MDBDropdownItem>
                  <MDBDropdownItem href='/Services' link>Childrens' Dentristry </MDBDropdownItem>
                  <MDBDropdownItem href='/Services' link>Dental Crowns</MDBDropdownItem>
                  <MDBDropdownItem href='/Services' link>Dental Implants </MDBDropdownItem>
                  <MDBDropdownItem href='/Services' link>Whitening</MDBDropdownItem>
                  <MDBDropdownItem href='/Services' link>More</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            </MDBNavbarNav>
            
         
            <button  class=" #E6D5BE circular ui icon button">
  Make an Appointment
</button>

        
   
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}