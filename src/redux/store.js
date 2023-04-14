import { configureStore } from '@reduxjs/toolkit'
import { signinSlice } from './features/auth/signinSlice'
import authReducer from '../redux/features/auth/authSlice'
import navbarReducer from '../redux/features/navbar/navbar'

const store = configureStore({
	reducer: {
		[signinSlice.reducerPath]: signinSlice.reducer,
		auth: authReducer,
		navbar: navbarReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(signinSlice.middleware),
})
console.log(store.getState())
export default store
