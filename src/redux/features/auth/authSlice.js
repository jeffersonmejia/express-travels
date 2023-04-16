import { createSlice } from '@reduxjs/toolkit'
const initialState = { isLoggued: false }

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authorizeUser: (state, action) => {
			state.isLoggued = action.payload
		},
	},
})

export const { authorizeUser, setProfile } = authSlice.actions
export default authSlice.reducer
