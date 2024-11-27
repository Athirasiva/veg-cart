import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Button, Row, Col } from "react-bootstrap";

function Cart() {
    
    const cart = useSelector((state)=>state.cartReducer)
    
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-3 ms-3">
    {cart.map((item) => (
      <Col key={item.id} >
        <Card style={{ width: "18rem" }} className="col-class">
          <Card.Img variant="top" src={item.image} className="image-container"/>
          <Card.Body className="card-text">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
             {item.description.slice(0,80)}...
             <h6>Price :₹ {item.price}</h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  )
}

export default Cart