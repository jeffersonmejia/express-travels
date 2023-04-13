import { createSlice } from '@reduxjs/toolkit'

const initialState = { isAuth: false }

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		auth: (state, action) => {
			try {
				state.isAuth = action.payload
			} catch (error) {
				console.log(error)
			}
		},
	},
})

export const { auth } = authSlice.actions
export default authSlice.reducer
