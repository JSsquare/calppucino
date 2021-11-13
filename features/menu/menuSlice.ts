import { createSlice } from '@reduxjs/toolkit'

type MenuItem = {
    itemName: string
    addToCartState: boolean
    itemTraits: any
    itemDescription: string
}
export type MenuState = MenuItem[]

const initialState: MenuState = [ ]

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenuItems: (menuState: any, action: any) => {
            menuState.push(...action.payload);
        },
        updateAddToCartState: (menuState: any, action: any) => { 
            const itemIdInCart = action.payload
            const index = menuState.findIndex((mitem: any) => mitem._id === itemIdInCart)
            if(index >= 0) menuState[index].addToCartState = true
        }
    }
})

export const { addMenuItems, updateAddToCartState } = menuSlice.actions
export default menuSlice.reducer