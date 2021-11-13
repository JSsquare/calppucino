import { RootState } from "../../app/store";


export const  getCartItems = (state: RootState) => state.cart.cartItems
export const getCartTotalPrice = (state: RootState) => state.cart.cartInfo?.totalPrice
export const getNumOfItemsInCart = (state: RootState): number => getCartItems(state)?.length