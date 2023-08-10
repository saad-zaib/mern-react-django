import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // the initial state is set empty not null
  email: "",
  name: "",
}

export const userSlice = createSlice({

  name: 'user_info', //it uses provided inital state for user information
  initialState,
  reducers: {
    // login and logout
    setUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
    unsetUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
  }
})

export const { setUserInfo, unsetUserInfo } = userSlice.actions

export default userSlice.reducer