
import { createSlice } from '@reduxjs/toolkit'


interface CartItem {
    id: number;
    title: string;
    price: number;
    thumbnail: string; // assuming it has a thumbnail field
}
  
interface CartState {
    cartItems: CartItem[];
  }
  
  
  
  const initialState: CartState = {
    cartItems: []
  };
  


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AdddtoCard(state, action) {
             
   
            
            state.cartItems.push( action.payload )
              
        },
        removeFromCart(state, action) {
          
            let copyItems = [...state.cartItems];

            copyItems = copyItems.filter((item) => item.id !== action.payload);
            state.cartItems = copyItems;
       
             
        } 
    }
})


export const { AdddtoCard, removeFromCart } = cartSlice.actions
export default cartSlice.reducer


