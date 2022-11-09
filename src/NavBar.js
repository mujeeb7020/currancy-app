import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark"> 
        <Container>
          <Navbar.Brand >CURRANCY APP</Navbar.Brand>  {/*href="home"*/ }
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="alldata">All data</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
    
}

export default NavBar;