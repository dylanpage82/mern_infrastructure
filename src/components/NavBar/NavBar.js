import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [showNavExternal2, setShowNavExternal2] = useState(false);

  return (
    <>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal2(!showNavExternal2)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal2}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'>
            <Link to='/'>Home</Link>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            <Link to='/gamepage'>Play Jeopardy</Link>
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
            <Link to='/studyguidepage'>Study Guide</Link>
          </MDBBtn>
        </div>
      </MDBCollapse>
    </>
  );
}