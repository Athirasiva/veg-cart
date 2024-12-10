import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Content.css";
import { useDispatch } from 'react-redux';
import { addTocart } from '../../redux/cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ViewItem() {
    const location = useLocation();
    const product = location.state?.product
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        
      dispatch(addTocart(product)); 
      toast.info(`${product.name} added to cart!`);
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
      <ToastContainer />
    </div>
  )
}

export default ViewItem
