import { createSlice } from '@reduxjs/toolkit'

const initialState = { isDropDown: false }

export const dropdownSlice = createSlice({
	name: 'navbarDropdown',
	initialState,
	reducers: {
		dropdown: (state, action) => {
			state.isDropDown = action.payload
		},
	},
})

export const { dropdown } = dropdownSlice.actions
export default dropdownSlice.reducer
