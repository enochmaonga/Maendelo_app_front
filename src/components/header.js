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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-end  flex-grow-1 pe-3">
                  <Nav.Link href="#action1">
                    Home
                  </Nav.Link>
                  <Nav.Link  href="#action2">
                    Book Requests
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    Out for swap
                    </Nav.Link>
                  <NavDropdown
                    title="Requests"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="d-flex justify-content-between align-items-start" href="#action3">
                        Pending
                            <span class="badge bg-danger rounded-pill">
                                14
                            </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="d-flex justify-content-between align-items-start" href="#action4">
                        Out for repair 
                            <span class="badge bg-warning rounded-pill">
                                14
                            </span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="d-flex justify-content-between align-items-start" href="#action5">
                        Repaired 
                            <span class="badge bg-success rounded-pill">
                                14
                            </span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;