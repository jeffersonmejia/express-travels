import { useSigninMutation } from '../../redux/features/auth/signinSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../../redux/features/auth/authSlice'
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
		const { username, password } = event.target.elements
		const credentials = {
			customer_username: username.value,
			customer_password: password.value,
		}

		authUser(credentials)
	}
	const authUser = async (credentials) => {
		try {
			const response = await signin(credentials)
			if (response.error) throw { response: response.error }
			if (response.data) {
				const status = parseInt(response.data.status)
				if (status === 200) {
					dispatch(auth(true))
					router.push('/dashboard')
					setError(null)
				}
			}
		} catch (signin_error) {
			const { data } = signin_error.response
			setError(data.statusText)
			setTimeout(() => setError(null), 2000)
		}
	}
	const handleChange = (event) => {}
	const myClass = styles.main
	const errorClass = styles.signin_error
	return { handleSubmit, handleChange, myClass, error, errorClass }
}
