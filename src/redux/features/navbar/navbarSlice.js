import { createSlice } from '@reduxjs/toolkit'

const initialState = { isDropDown: false, isAside: false }

export const navbar = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		toggleDropdown: (state, action) => {
			state.isDropDown = action.payload
		},
		toggleAside: (state, action) => {
			state.isAside = action.payload
		},
	},
})

export const { toggleDropdown, toggleAside } = navbar.actions
export default navbar.reducer
