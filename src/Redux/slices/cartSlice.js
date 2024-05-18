import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{

        //action define

            // 1. Add to cart 
            addToCart:(state,action)=>{
                state.push(action.payload);
                alert("Added to the Cart ")
            },
            deleteFromCart:(state,action)=>{
                return state.filter(item=>item.id!=action.payload)

            },
            emptyCart:(state)=>{
                return state=[]
            }
    }
})

export const {addToCart,deleteFromCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer