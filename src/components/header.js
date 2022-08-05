import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} >
          <Container fluid>
            <Navbar.Brand href="#">
            <img
              src="./logo.png"
              height="24"
              className="d-inline-block align-text-top pe-3"
            />
                Maendeleo Tracker
            </Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;