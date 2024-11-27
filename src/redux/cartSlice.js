import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"veg-cart",
    initialState:[],
    reducers:{
        addTocart:(state,action)=>{
            state.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        emptyCart:(state)=>{
            return state = [];
        }
    }
})
 export const {addTocart, removeFromCart, emptyCart} = cartSlice.actions;
 export default cartSlice.reducer
