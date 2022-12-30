import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../images/logo1.png";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid ">
      <Navbar className="navbar light" light expand="md">
        <NavbarBrand>
          <Link className="img" to="/">
            <img
              width="150px"
              height="auto"
              className="img-responsive"
              src={Logo}
              alt="logo"
            />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="navItems">
              <NavLink className="active ms-3 home">
                <Link className=" text-light home" to="/">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-3" href="/products">
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-3" href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-3" href="/contact">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ms-3" href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="icons">
            <Link to="/search">
              <FontAwesomeIcon color="#097969" id="search" icon={faSearch} />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon
                color="#097969"
                id="cart"
                icon={faShoppingCart}
              />
            </Link>
            <Link to="/login">
              <FontAwesomeIcon color="#097969" id="user" icon={faUser} />
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
