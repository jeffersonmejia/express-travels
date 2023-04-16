import { createSlice } from '@reduxjs/toolkit'

const initialState = { isDropDown: false, isAside: false }

export const dropdownSlice = createSlice({
	name: 'navbarDropdown',
	initialState,
	reducers: {
		dropdown: (state, action) => {
			state.isDropDown = action.payload
		},
		toggleAside: (state, action) => {
			state.isAside = action.payload
		},
	},
})

export const { dropdown, toggleAside } = dropdownSlice.actions
export default dropdownSlice.reducer
