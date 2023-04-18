import { createSlice } from '@reduxjs/toolkit'
const initialState = {}

export const sectionSlice = createSlice({
	name: 'sectionSlice',
	initialState,
	reducers: {
		toggleSection: (state, action) => {
			state.actionActive = action.payload
		},
		setAccess: (state, action) => {
			Object.assign(state, action.payload)
		},
	},
})

export const { toggleSection, setAccess } = sectionSlice.actions
export default sectionSlice.reducer
