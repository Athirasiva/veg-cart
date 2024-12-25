import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/cartSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function DataRow() {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cartReducer)
  const searchQuery = cart.searchQuery;
  const filterData = data.filter((item)=>
  item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
  let pdata=[]
  if (filterData) {
    pdata = filterData
  }
  else{
    pdata= data
  }
  const formClick = (item) =>{
    
    navigate('/itemview', { state: { product: item } });
  }
  const handleAddToCart = (item) => {
    dispatch(addTocart(item));
    toast.info(`${item.name} added to cart!`);
  };
  return (
  
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-3 ms-3">
      {pdata.map((item) => (
        <Col key={item.id} >
          <Card style={{ width: "18rem" }} className="col-class" >
            <Card.Img variant="top" src={item.image} className="image-container" onClick={()=>formClick(item)}/>
            <Card.Body className="card-text">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
               {item.description.slice(0,80)}...
               <h6>Price :₹ {item.price}</h6>
              </Card.Text>
              <button className="cart-btn" onClick={()=>handleAddToCart(item)}>Add to Cart</button>
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
    quantity:0,
    description:
      "Carrots are full of benefits—they may promote healthy vision, balance your blood sugar, help with weight management, lower your risk of cancer, regulate blood pressure, reduce heart disease, improve immunity, and boost brain health",
    image:"/Images/pexels-suzyhazelwood-1306559.jpg"
  },
  {
    id: 2,
    name: "Broccoli",
    price: 145.00,
    quantity:0,
    description:"Broccoli is a good calcium source, essential for maintaining strong bones and preventing osteoporosis. It also contains vitamin K, which is essential for bone health. Broccoli is low in calories but high in fiber, making it a filling food that can help control weight and promote a healthy metabolism.",
    image:
      "/Images/pexels-pixabay-47347.jpg",
  },
  {
    id: 3,
    name: "Potatoes",
    price: 20.8,
    quantity:0,
    description:"Potatoes were a life-saving food source in early times because the vitamin C prevented scurvy",
    image:
      "/Images/pexels-polina-tankilevitch-4110476.jpg",
  },
  {
    id: 4,
    name: "Beetroot",
    price: 49.00,
    quantity:0,
    description:"Beetroots are a great source of fiber, folate (vitamin B9), manganese, potassium, iron, and vitamin C. Beetroots and beetroot juice have been associated with numerous health benefits, including improved blood flow, lower blood pressure, and increased exercise performance",
    image:
      "/Images/pexels-eva-bronzini-5502857.jpg",
  },
  {
    id: 5,
    name: "Garlic",
    price: 96.00,
    quantity:0,
    description:"People commonly use garlic for high blood pressure, high levels of cholesterol or other fats in the blood, and hardening of the arteries.",
    image:
      "/Images/pexels-nickcollins-1392585.jpg",
  },
  {
    id: 6,
    name: "Spinach",
    price: 19.00,
    quantity:0,
    description:"Spinach is an excellent source of lutein, an antioxidant known to protect against age-related eye diseases such as macular degeneration and cataracts",
    image:
      "/Images/pexels-yaroslav-shuraev-8845078.jpg",
  },
  {
    id: 7,
    name: "Okra",
    price: 16.20,
    quantity:0,
    description:"Okra is rich in magnesium, folate, fiber, antioxidants, and vitamins C, K1 and A. It may help support healthy pregnancy, heart health, blood sugar",
    image:
      "/Images/pexels-aboodi-17975554.jpg",
  },
  {
    id: 8,
    name: "Mushroom",
    price: 85.00,
    quantity:0,
    description:"Mushrooms contain macronutrients that support a healthy immune system.",
    image:
      "/Images/pexels-pixabay-36438.jpg",
  },
  {
    id: 9,
    name: "Sweet Potatoes",
    price: 18.8,
    quantity:0,
    description:"Sweet potatoes are a healthy root vegetable chock full of antioxidants that protect your cells from damage",
    image:
      "/Images/pexels-kindelmedia-7456548.jpg",
  },
];
