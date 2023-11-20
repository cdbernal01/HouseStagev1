import React from 'react'
import {Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavLink} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png';


export const Header = () => {
  return (
    <header>
        <Navbar bg="black" variant="dark" expant="lg" collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <NavbarBrand>
                <img src={logo} alt='HouseStage'>
                  </img> HouseStage
                  </NavbarBrand>
              </LinkContainer>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <LinkContainer to='/cart'>
                    <NavLink >
                      <FaShoppingCart /> Carro de Compras
                      </NavLink>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                    <NavLink href="/login">
                      <FaUser /> Inicio Sesion</NavLink>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}
