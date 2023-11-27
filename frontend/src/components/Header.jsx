import React from "react";
import {
  Badge,
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

export const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <header>
      <Navbar bg="black" variant="dark" expant="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>
              <img src={logo} alt="HouseStage"></img>
            </NavbarBrand>
          </LinkContainer>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <NavLink>
                  <FaShoppingCart /> Carro de Compras
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </NavLink>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavLink href="/login">
                  <FaUser /> Inicio Sesion
                </NavLink>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
