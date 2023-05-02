import { useSigninMutation } from '../../redux/features/auth/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import { authorizeUser } from '../../redux/features/auth/authSlice'
import { useRouter } from 'next/router'
import styles from './style.module.css'
import { useEffect, useState } from 'react'

export function useHook() {
	const [error, setError] = useState(null)
	const [password, setPassword] = useState(null)
	const [signin] = useSigninMutation()
	const dispatch = useDispatch()
	const router = useRouter()
	const isLoggued = useSelector((state) => state.auth.isLoggued)

	const handleSubmit = (event) => {
		event.preventDefault()
		let { username, password } = event.target.elements
		username = username.value
		password = password.value
		const credentials = { username, password }

		authUser(credentials)
	}
	const handleClick = () => {
		setPassword((prev) => {
			return { show: prev?.show ? false : true }
		})
	}
	const authUser = async (credentials) => {
		try {
			const response = await signin(credentials)
			const { data, error } = response
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
	const myClass = styles.main
	const errorClass = `${styles.signin_error} error`
	const material = 'material-symbols-outlined'
	const password_style = styles.password_style

	useEffect(() => {
		const checkSession = async () => {
			const response = await signin({ checkSession: true })
			const status = response?.data?.status || false
			if (status === 200) router.push('/dashboard')
		}
		checkSession()
	}, [])
	return {
		handleSubmit,
		myClass,
		error,
		errorClass,
		material,
		password_style,
		password,
		handleClick,
		isLoggued,
	}
}
