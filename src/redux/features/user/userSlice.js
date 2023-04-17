import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userId: null,
	userFullName: null,
	roleId: null,
	roleName: null,
	role_operations: null,
}

const userSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, actions) => {
			return {
				...state,
				...actions.payload,
			}
		},
	},
})

export const { setProfile } = userSlice.actions
export default userSlice.reducer
