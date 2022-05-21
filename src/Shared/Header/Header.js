import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const handlelogout = () => {
    signOut(auth);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="#home"> EduEx </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="home"> Home </Nav.Link>
            <Nav.Link as={NavLink} to="services"> All Courses </Nav.Link>
            <Nav.Link as={NavLink} to="reviews"> Reviews </Nav.Link>
            <Nav.Link as={NavLink} to="blog"> Blog </Nav.Link>
          </Nav>
          <Nav>
            {
              user ?
                <Nav.Link onClick={handlelogout}> Logout </Nav.Link>
                :
                <Nav.Link as={NavLink} to="login">Login</Nav.Link>
            }
            <Nav.Link as={NavLink} to="about">     About    </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Header;