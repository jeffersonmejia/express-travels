import { createSlice } from '@reduxjs/toolkit'

const initialState = { isDropDown: false, isAside: false }

export const navbar = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		toggleDropdown: (state) => {
			state.isDropDown = !state.isDropDown
		},
		toggleAside: (state) => {
			state.isAside = !state.isAside
		},
	},
})

export const { toggleDropdown, toggleAside } = navbar.actions
export default navbar.reducer
