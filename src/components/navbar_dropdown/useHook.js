import styles from './styles.module.css'
import { useSignoutMutation } from '../../redux/features/auth/signinSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../../redux/features/auth/authSlice'
import { useRouter } from 'next/router'
import { useState } from 'react'

const initialState = 'Cerrar sesión'
export function useHook() {
	const [logout, setLogout] = useState(initialState)
	const [signout] = useSignoutMutation()
	const dispatch = useDispatch()
	const router = useRouter()
	const handleClick = async () => {
		try {
			const response = await signout()
			const { data } = response
			if (data.status === 200) {
				setLogout('Cerrando sesión...')
			} else throw { status: 401 }
			dispatch(auth(false))
			setTimeout(() => {
				router.push('/signin')
			}, 1500)
		} catch (error) {
			setLogout('Error', error.status)
			setTimeout(() => {
				setLogout(initialState)
			}, 2000)
		}
	}

	const myClass = styles.dropdown
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick, logout }
}
