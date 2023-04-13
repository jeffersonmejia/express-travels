import { useSigninMutation } from '../../redux/features/auth/signinSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../../redux/features/auth/authSlice'
import { useRouter } from 'next/router'
import styles from './style.module.css'

export function useHook() {
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
			if (response.data) {
				const status = parseInt(response.data.status)
				if (status === 200) {
					dispatch(auth(true))
					router.push('/dashboard')
				}
			}
		} catch (error) {
			console.log(error)
		}
	}
	const handleChange = (event) => {}
	const myClass = styles.main
	return { handleSubmit, handleChange, myClass }
}
