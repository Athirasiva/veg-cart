import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { AiOutlineDelete } from "react-icons/ai";
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../../redux/cartSlice";
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer);
  const [sum, setSum] = useState("");
  useEffect(() => {
    if (cart.length > 0) {
      setSum(cart.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    }
  }, [cart]);
  const confirmOrder = () => {
    alert("Order Placed Successfully");
    dispatch(emptyCart());
    
    navigate('/')
  };
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      {cart.length > 0 ? (
        <TableContainer className="w-100 d-flex  justify-content-center">
          <Table
            sx={{ minWidth: 700 }}
            aria-label="spanning table"
            className="w-50 d- flex align-items-center justify-content-center"
            component={Paper}
          >
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Qty.</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <img
                      src={row.image}
                      alt=""
                      style={{ height: "100px", width: "100px" }}
                    />
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">0</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <button className="btn-delete" onClick={()=>dispatch(removeFromCart(row.id))}>
                    <AiOutlineDelete />
                    </button>
                    </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Total no of Product</TableCell>
                <TableCell align="right">{cart.length}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{sum}</TableCell>
              </TableRow>
            </TableBody>
            <TableRow>
              <TableCell colSpan={2} style={{ border: "none" }}></TableCell>
              <button className="cart-btn m-4" onClick={confirmOrder}>
                Confirm Order
              </button>
            </TableRow>
          </Table>
        </TableContainer>
      ) : (
        <div className="center-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="22" cy="55" r="5"></circle>
            <circle cx="49" cy="55" r="5"></circle>
            <path d="M6 6h4l7.68 34.74a1 1 0 0 0 .98.75H47.34a1 1 0 0 0 .98-.75L54 6h4"></path>
          </svg>
          <h1>Your Cart Is Empty</h1>
          <h5>This feels too light! Go on, add all your favourites</h5>
          <button className="cart-btn m-4" onClick={handleClick}>
            Start Shopping
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
