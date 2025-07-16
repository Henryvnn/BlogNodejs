import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    number: 12,
}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
    },
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer