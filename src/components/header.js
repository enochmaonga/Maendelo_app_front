import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


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
              alt=""
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