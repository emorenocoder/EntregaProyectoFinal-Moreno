import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import CartWidget from './CartWidget';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>EstiloTemporal</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="navlink" activeClassName="link-active" exact to="/">inicio</NavLink>
          <NavLink className="navlink" activeClassName="link-active" to="/Jacket">Chaqueta</NavLink>
          <NavLink className="navlink" activeClassName="link-active" to="/Jeans">Jeans</NavLink>
          <NavLink className="navlink" activeClassName="link-active" to="/Shirt">Polera</NavLink>
          <NavLink className="navlink" to="/cart"><FaCartPlus /></NavLink>
        </Nav>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;
