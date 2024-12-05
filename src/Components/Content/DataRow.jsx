import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Card, Button, Row, Col } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/cartSlice";
import { toast, ToastContainer } from 'react-toastify';
function DataRow() {
  const dispatch = useDispatch();
  return (
  
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-3 ms-3">
      {data.map((item) => (
        <Col key={item.id} >
          <Card style={{ width: "18rem" }} className="col-class">
            <Card.Img variant="top" src={item.image} className="image-container"/>
            <Card.Body className="card-text">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
               {item.description.slice(0,80)}...
               <h6>Price :₹ {item.price}</h6>
              </Card.Text>
              <button className="cart-btn" onClick={()=>dispatch(addTocart(item))}>Add to Cart</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <ToastContainer />
    </Row>
  );
}

export default DataRow;

const data = [
  {
    id: 1,
    name: "Carrot",
    price: 49.00,
    description:
      "Carrots are full of benefits—they may promote healthy vision, balance your blood sugar, help with weight management, lower your risk of cancer, regulate blood pressure, reduce heart disease, improve immunity, and boost brain health",
    image:
      "https://images.pexels.com/photos/54082/carrots-vegetables-food-orange-54082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Broccoli",
    price: 145.00,
    description:"Broccoli is a good calcium source, essential for maintaining strong bones and preventing osteoporosis. It also contains vitamin K, which is essential for bone health. Broccoli is low in calories but high in fiber, making it a filling food that can help control weight and promote a healthy metabolism.",
    image:
      "https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Potatoes",
    price: 20.8,
    description:"Potatoes were a life-saving food source in early times because the vitamin C prevented scurvy",
    image:
      "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Beetroot",
    price: 49.00,
    description:"Beetroots are a great source of fiber, folate (vitamin B9), manganese, potassium, iron, and vitamin C. Beetroots and beetroot juice have been associated with numerous health benefits, including improved blood flow, lower blood pressure, and increased exercise performance",
    image:
      "https://images.pexels.com/photos/29436276/pexels-photo-29436276/free-photo-of-fresh-organic-beetroots-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Garlic",
    price: 96.00,
    description:"People commonly use garlic for high blood pressure, high levels of cholesterol or other fats in the blood, and hardening of the arteries.",
    image:
      "https://images.pexels.com/photos/29437123/pexels-photo-29437123/free-photo-of-close-up-of-fresh-garlic-with-a-rustic-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Spinach",
    price: 19.00,
    description:"Spinach is an excellent source of lutein, an antioxidant known to protect against age-related eye diseases such as macular degeneration and cataracts",
    image:
      "https://images.pexels.com/photos/6824475/pexels-photo-6824475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Okra",
    price: 16.20,
    description:"Okra is rich in magnesium, folate, fiber, antioxidants, and vitamins C, K1 and A. It may help support healthy pregnancy, heart health, blood sugar",
    image:
      "https://images.pexels.com/photos/2583187/pexels-photo-2583187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Mushroom",
    price: 85.00,
    description:"Mushrooms contain macronutrients that support a healthy immune system.",
    image:
      "https://images.pexels.com/photos/36438/mushrooms-brown-mushrooms-cook-eat.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    name: "Sweet Potatoes",
    price: 18.8,
    description:"Sweet potatoes are a healthy root vegetable chock full of antioxidants that protect your cells from damage",
    image:
      "https://images.pexels.com/photos/13059602/pexels-photo-13059602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
