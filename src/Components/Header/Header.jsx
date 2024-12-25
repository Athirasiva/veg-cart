import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Button, Form, FormControl } from "react-bootstrap"; // Cart icon from react-icons
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/cartSlice";
function Header() {
  // const cart = useSelector((state) => state.cartReducer.items);
  const { items, searchQuery } = useSelector((state) => state.cartReducer);
  const count = items.reduce((acc, item) => acc + item.quantity, 0);
  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    const query = e.target.value;
    dispatch(searchProducts(query));
  };
  return (
    <div>
      <Navbar className="nav-bar" fixed="top">
        <Container>
          <Link to={"/"}>
            <img src="/Images/image-logo.png" alt="Company Logo" />
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
          {/* <Button
            variant="outline-light"
            className="d-flex align-items-center cart-btn"
            // Add to cart functionality
          >
            <FaShoppingCart className="me-2" /> 
            <span className="cart-count me-2">{count}</span>
            <Link to={"/cart"} className="nav-link-class">
              {" "}
              Add to Cart
            </Link>
          </Button> */}
          <Form inline className="search-form">
            <FormControl
              type="text"
              placeholder="Search"
              // value={searchQuery}
              onChange={handleSearchChange}
              className="me-2"
            />
            <Button variant="outline-light" type="submit">
              <FaSearch />
            </Button>
          </Form>
          <Link to={"/cart"} className="nav-link-class">
            <Button
              variant="outline-light"
              className="d-flex align-items-center cart-btn"
            >
              <FaShoppingCart className="me-2" /> {/* Cart Icon */}
              <span className="cart-count me-2">{count}</span>
              {count > 0 ? "Go to Cart" : "Add to Cart"}
            </Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
