import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "veg-cart",
    initialState: {
        items: [],
        searchQuery: "" // Add this to store search query
    },
    reducers: {
        addTocart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((cartItem) => cartItem.id == item.id);

            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;

            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            // state.push(action.payload)
        },
        removeFromCart: (state, action) => {
           
            
            state.items= state.items.filter(item => item.id != action.payload);
        },
        emptyCart: (state) => {
             state.items = [];
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload
            const item = state.items.find(item => item.id == id)
            if (item) {
                item.quantity = quantity;
            }
        },
        searchProducts: (state,action) =>{
            state.searchQuery = action.payload
        }
    }
})
export const { addTocart, removeFromCart, emptyCart, updateQuantity, searchProducts } = cartSlice.actions;
export default cartSlice.reducer
