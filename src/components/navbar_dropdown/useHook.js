import styles from './styles.module.css'
import { useSignoutMutation } from '../../redux/features/auth/signinSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../../redux/features/auth/authSlice'

export function useHook() {
	const [signout] = useSignoutMutation()
	const dispatch = useDispatch()

	const handleClick = async () => {
		try {
			const response = await signout()
			console.log(response)
			dispatch(auth(false))
		} catch (error) {
			console.log(error)
		}
	}

	const myClass = styles.dropdown
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick }
}
