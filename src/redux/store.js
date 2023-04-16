import { configureStore } from '@reduxjs/toolkit'
import { authAPI } from './features/auth/authAPI'
import { userAPI } from './features/user/userAPI'
import authReducer from './features/auth/authSlice'
import navbarReducer from './features/navbar/navbarSlice'
import userReducer from './features/user/userSlice'

const store = configureStore({
	reducer: {
		[authAPI.reducerPath]: authAPI.reducer,
		[userAPI.reducerPath]: userAPI.reducer,
		auth: authReducer,
		navbar: navbarReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authAPI.middleware).concat(userAPI.middleware),
})
export default store
