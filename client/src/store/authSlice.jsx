import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: false,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = true
        }
    },
  })

  export const { setName } = authSlice.actions

  export default authSlice.reducer