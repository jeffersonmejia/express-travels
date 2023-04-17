import { createSlice } from '@reduxjs/toolkit'
const initialState = { isLoggued: false, hasLogOut: false }

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authorizeUser: (state) => {
			state.hasLogOut = false
			state.isLoggued = true
		},
		logOut: (state) => {
			state.hasLogOut = true
			state.isLoggued = false
		},
	},
})

export const { authorizeUser, logOut } = authSlice.actions
export default authSlice.reducer
