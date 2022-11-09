import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CURRANCY APP</Navbar.Brand>
            <Nav className="me-auto" variant="dark" bg="dark">
              <Nav.Link  to="/">HOME</Nav.Link>
              <Nav.Link  to="/alldata">DATA</Nav.Link>


            </Nav>
          </Container>
        </Navbar> 
    </div>
  )
}

export default NavBar;