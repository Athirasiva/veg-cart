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
import {
  emptyCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.items);

  const [sum, setSum] = useState("");
  useEffect(() => {
    if (cart.length > 0) {
      setSum(
        cart.reduce((total, item) => total + item.price * item.quantity, 0)
      );
    }
  }, [cart]);

  const confirmOrder = () => {
    toast.success("Order Placed Successfully !", {
      theme: "colored",
    });
    dispatch(emptyCart());
    // navigate('/')
  };

  function handleClick() {
    navigate("/");
  }

  const deleteItem = (elem) => {
    dispatch(removeFromCart(elem.id));
    toast.error(`${elem.name} is Removed From the Cart`, {
      theme: "colored",
    });
  };

  const handleQtyChange = (id, quantity) => {
    const newQuantity = String(quantity).trim();
    if (newQuantity === "") {
      return; // Allow the user to clear the field without setting invalid value
    }
    const parsedQuantity = parseInt(newQuantity, 10);
    // Validate if the parsed value is a valid number and greater than or equal to 1
    if (isNaN(parsedQuantity) || parsedQuantity < 1) {
      toast.error("Quantity must be a valid number greater than 0", {
        theme: "colored",
      });
      return; // Prevent invalid input
    }

    // Dispatch the action to update the quantity in Redux store
    dispatch(updateQuantity({ id, quantity: parsedQuantity }));
  };
  return (
    <div>
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
                      className="cart-image"
                    />
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          handleQtyChange(row.id, row.quantity - 1)
                        }
                        disabled={row.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={row.quantity}
                        defaultValue={row.quantity}
                        onChange={(e) =>
                          handleQtyChange(row.id, e.target.value)
                        } // Handle input changes
                        onBlur={(e) => {
                          // Optionally reset the value to 1 if it's left empty
                          if (e.target.value === "") {
                            handleQtyChange(row.id, 1); // Set to 1 if left empty
                          }
                        }}
                        min={1}
                      />
                      <button
                        onClick={() =>
                          handleQtyChange(row.id, row.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <button
                      className="btn-delete"
                      onClick={() => deleteItem(row)}
                      title={`Remove ${row.name} from cart`}
                    >
                      <AiOutlineDelete />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Total no of Product</TableCell>
                <TableCell align="right">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </TableCell>
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
      <ToastContainer />
    </div>
  );
}

export default Cart;
