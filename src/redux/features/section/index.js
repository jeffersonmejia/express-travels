import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: 0,
		actionActive: 0,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: 1,
		actionActive: 0,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: 2,
		actionActive: 0,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: 3,
		actionActive: 0,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: 4,
		actionActive: 0,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: 5,
		actionActive: 0,
	},
	{
		operation: ['Contratar personal', 'Gestionar personal'],
		roleId: 6,
		actionActive: 0,
	},
]

export const sectionSlice = createSlice({
	name: 'sectionSlice',
	initialState,
	reducers: {
		toggleSection: (state, action) => {
			console.log(action.payload)
		},
	},
})

export const { toggleSection } = sectionSlice.actions
export default sectionSlice.reducer
