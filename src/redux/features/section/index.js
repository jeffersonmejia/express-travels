import { createSlice } from '@reduxjs/toolkit'
const initialState = {}

export const sectionSlice = createSlice({
	name: 'sectionSlice',
	initialState,
	reducers: {
		toggleSection: (state, action) => {
			const { section, operation } = action.payload
			const newState = { ...state }
			newState.dashboard.sectionOn = section
			newState.dashboard.sections.forEach((el, idx) => {
				if (idx === section) {
					el.operationOn = operation
				}
			})
			state = { ...state, newState }
		},
		setAccess: (state, action) => {
			Object.assign(state, action.payload)
		},
	},
})

export const { toggleSection, setAccess } = sectionSlice.actions
export default sectionSlice.reducer
