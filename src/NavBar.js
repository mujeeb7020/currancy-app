import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, Route, Routes } from 'react-router-dom';
import Books from './Pages/Books';
const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CURRANCY APP</Navbar.Brand>
            <Nav className="me-auto" variant="dark" bg="dark">
              <Nav.Link  to="/books">HOME</Nav.Link>
              <Nav.Link  to="/">DATA</Nav.Link>

              
            <Link to="/books">Books</Link>
          
            </Nav>
          </Container>
        </Navbar> 
        
        <Routes>
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </div>
  )
}

export default NavBar;