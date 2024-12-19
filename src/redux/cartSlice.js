import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "veg-cart",
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            const item = action.payload;
            const existingItem = state.find((cartItem) => cartItem.id == item.id);

            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;

            } else {
                state.push({ ...item, quantity: 1 });
            }
            // state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        emptyCart: (state) => {
            return state = [];
        },
        updateQuantity: (state,action)=>{
            const {id, quantity} = action.payload
            const item = state.find(item => item.id == id)
            if (item) {
                item.quantity = quantity;
            }
        }
    }
})
export const { addTocart, removeFromCart, emptyCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer
