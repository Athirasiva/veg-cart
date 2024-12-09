import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Content.css";
import { useDispatch } from 'react-redux';
import { addTocart } from '../../redux/cartSlice';

function ViewItem() {
    const location = useLocation();
    const product = location.state?.product
    const dispatch = useDispatch()
    const handleAddToCart = () => {
      console.log("clicked");
      
      dispatch(addTocart(product)); // Dispatch the product to the cart
    };
  return (
    <div>
      <Container>
        <Row className="product-class">
         
         <Col className='left-section'>
             <img
               src={product.image}
               alt=""
               className="card-container"
            //    style={{ height: "50vh" }}
             />
           </Col>
           <Col className="right-section">
             <h4>{product.name}</h4>
 
             <p className="me-auto">
             {product.description}
             </p>
             <h5>Price : ₹ {product.price}</h5>
             <button onClick={handleAddToCart} >
              Add To Cart
             </button>
           </Col>
           
         </Row>
        
      </Container>
    </div>
  )
}

export default ViewItem
