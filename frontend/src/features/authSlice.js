import { createSlice } from '@reduxjs/toolkit'

// the inistial state of access_token
const initialState = {
  access_token: null,
}

export const authSlice = createSlice({
  // this manages access_token
  name: 'auth_token',
  initialState,
  reducers: {
    // for login of user
    setUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
    // for logout of user
    unSetUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
  },
})

export const { setUserToken, unSetUserToken } = authSlice.actions

export default authSlice.reducer