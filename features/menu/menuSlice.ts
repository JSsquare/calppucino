import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MenuItem = {
    itemName: string
    itemTraits: any
    itemDescription: string
}
export type MenuState = [ MenuItem | {} ] | []

const initialState: MenuState = []

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenuItems: (state: any, action: any) => {
            console.log(action.payload, "<<payload")
            state.push(...action.payload);
        }
    }
})

export const { addMenuItems } = menuSlice.actions
export default menuSlice.reducer