import { createSlice } from '@reduxjs/toolkit'

type CartItem =  {
    menuItemId: string
    menuItemName: string
    quantity: number
    price: number
} | { }

type CartInfo = {
    totalPrice: number | 0
}


export type InitialStateType = {
    cartItems: CartItem[]
    cartInfo: CartInfo
}

const initialState: InitialStateType = {
    cartItems: [ ],
    cartInfo: {
        totalPrice: 0
     }
 }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state: any, action: any) => {
            const itemPrice = action.payload?.price
            state?.cartItems.push(action.payload);
            state.cartInfo.totalPrice += itemPrice
        }
    }
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice.reducer