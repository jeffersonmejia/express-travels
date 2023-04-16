import { useSigninMutation } from '../../redux/features/auth/authAPI'
import { useDispatch } from 'react-redux'
import { authorizeUser } from '../../redux/features/auth/authSlice'
import { useRouter } from 'next/router'
import styles from './style.module.css'
import { useState } from 'react'

export function useHook() {
	const [error, setError] = useState(null)
	const [signin] = useSigninMutation()
	const dispatch = useDispatch()
	const router = useRouter()

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
			dispatch(authorizeUser(true))
			setError(null)
			router.push('/dashboard')
		} catch (signin_error) {
			const { api_response } = signin_error.data
			setError(api_response)
			setTimeout(() => setError(null), 2000)
		}
	}
	const handleChange = (event) => {}
	const myClass = styles.main
	const errorClass = `${styles.signin_error} error`
	return { handleSubmit, handleChange, myClass, error, errorClass }
}
