import {createSlice} from '@reduxjs/toolkit'

export const initialState = null

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, action) => action.payload,
        clearUser: () => initialState,
    },
})

export const {setUser} = userSlice.actions

export default userSlice.reducer
