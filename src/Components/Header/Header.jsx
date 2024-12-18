import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "react-bootstrap"; // Cart icon from react-icons
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector((state) => state.cartReducer);
  const count = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div>
      <Navbar className="nav-bar" fixed="top">
        <Container>
          <Link to={"/"}>
            <img src="/Images/image-logo.png" alt="" />
          </Link>
          <Nav>
            <Link to={"/"} className="nav-link-class text-light">
              Home
            </Link>
            <Link to={"/about us"} className="nav-link-class text-light">
              About Us
            </Link>
            <Link to={"/contact-us"} className="nav-link-class text-light">
              Contact Us
            </Link>
          </Nav>
          <Button
            variant="outline-light"
            className="d-flex align-items-center cart-btn"
            // Add to cart functionality
          >
            <FaShoppingCart className="me-2" /> {/* Cart Icon */}
            <span className="cart-count me-2">{count}</span>
            <Link to={"/cart"} className="nav-link-class">
              {" "}
              Add to Cart
            </Link>
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
