import { useSigninMutation } from '../../redux/features/auth/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import { authorizeUser } from '../../redux/features/auth/authSlice'
import { useRouter } from 'next/router'
import styles from './style.module.css'
import { useState } from 'react'

export function useHook() {
	const [error, setError] = useState(null)
	const [signin] = useSigninMutation()
	const dispatch = useDispatch()
	const router = useRouter()
	const isLoggued = useSelector((state) => state.auth.isLoggued)
	console.log(isLoggued)

	const handleSubmit = (event) => {
		event.preventDefault()
		let { username, password } = event.target.elements
		username = username.value
		password = password.value
		const credentials = { username, password }

		authUser(credentials)
	}
	const authUser = async (credentials) => {
		try {
			const fetch_response = await signin(credentials)
			const { data, error } = fetch_response
			if (error) throw error
			else if (status >= 400) throw data
			dispatch(authorizeUser())
			setError(null)
			router.push('/dashboard')
		} catch (signin_error) {
			if (!signin_error.data || !signin_error.data.api_response) {
				setError(`Error desconocido: ${signin_error}`)
			} else {
				const { api_response } = signin_error.data
				setError(api_response)
			}
		} finally {
			setTimeout(() => setError(null), 2000)
		}
	}
	const handleChange = (event) => {}
	const myClass = styles.main
	const errorClass = `${styles.signin_error} error`
	return { handleSubmit, handleChange, myClass, error, errorClass }
}
