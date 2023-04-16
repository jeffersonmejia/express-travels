import { configureStore } from '@reduxjs/toolkit'
import { signinSlice } from './features/auth/signinSlice'
import authReducer from '../redux/features/auth/authSlice'
import navbarReducer from '../redux/features/navbar/navbar'
import userReducer from './features/user/userSlice'
import { userApi } from './features/user/userApi'

const store = configureStore({
	reducer: {
		[signinSlice.reducerPath]: signinSlice.reducer,
		[userApi.reducerPath]: userApi.reducer,
		auth: authReducer,
		navbar: navbarReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(signinSlice.middleware).concat(userApi.middleware),
})
export default store
