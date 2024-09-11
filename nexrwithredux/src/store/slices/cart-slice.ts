
import { createSlice } from '@reduxjs/toolkit'
import { STATUS_CODES } from 'http';



const initialState = {
    cartItems:[]
}




const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AdddtoCard(state, action) {
             
            console.log(action.payload);
            
            state.cartItems.push( action.payload )
              
        },
        removeFromCart(state, action) {
          
            let copyItems = [...state.cartItems];

            copyItems = copyItems.filter((item) => item.id !== action.payload);
            state.cartItems = copyItems;
             console.log(state.cartItems);
             
        } 
    }
})


export const { AdddtoCard, removeFromCart } = cartSlice.actions
export default cartSlice.reducer


