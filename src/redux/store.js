import { configureStore } from '@reduxjs/toolkit'
import { signinSlice } from './features/auth/signinSlice'
import authReducer from '../redux/features/auth/authSlice'
const store = configureStore({
	reducer: {
		[signinSlice.reducerPath]: signinSlice.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(signinSlice.middleware),
})
console.log(store.getState())
export default store
