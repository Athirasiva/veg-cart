import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Button } from 'react-bootstrap';// Cart icon from react-icons
import './Header.css'
function Header() {
  return (
    <div>
     <Navbar className='nav-bar'>
        <Container>
          <Navbar.Brand href="#home" className='text-light'>Eat Veg</Navbar.Brand>
          <Nav >
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#features" className="text-light">About Us</Nav.Link>
            <Nav.Link href="#pricing" className="text-light">Contact Us</Nav.Link>
          </Nav>
          <Button 
            variant="outline-light" 
            className="d-flex align-items-center cart-btn"
            // Add to cart functionality
          >
            <FaShoppingCart className="me-2" /> {/* Cart Icon */}
            
              <span className="cart-count me-2">0</span> 
          
            Add to Cart
          </Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
