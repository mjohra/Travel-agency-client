import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="pt-0 mb-5"
        variant="light"
        fixed="top"
        collapseOnSelect
        expand="lg"
      >
        <Container fluid className="nav-detail">
          <Navbar.Brand href="#home">
            <h3 className="title title-logo">LOVE TRAVEL</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>

            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
             
              <NavDropdown.Item
                className="text-black"
                as={HashLink}
                to="/home#gallery"
              >
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item className="text-black" as={HashLink} to="/home#destination">
                Destination
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-black"
                as={HashLink}
                to="/home#about"
              >
                About Us
              </NavDropdown.Item>
            </NavDropdown>
            {
              user?.email &&  <NavDropdown title="Order" id="collasible-nav-dropdown">
              <NavDropdown.Item
                className="text-black"
                as={Link}
                to="/addService"
              >
                Add Service
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-black"
                as={Link}
                to="/manageOrder"
              >
                Manage Order
              </NavDropdown.Item>
              <NavDropdown.Item
                className="text-black"
                as={Link}
                to="/myOrder"
              >
                My Order
              </NavDropdown.Item>

            </NavDropdown>
            }
            {user?.email ? (
              <Button className='me-2 logOut-btn' onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Navbar.Text>
              <a className='text-white' href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
