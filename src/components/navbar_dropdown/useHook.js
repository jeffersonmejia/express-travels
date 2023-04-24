import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSignoutMutation } from '../../redux/features/auth/authAPI'
import { toggleDropdown } from '../../redux/features/navbar/navbarSlice'
import { logOut } from '../../redux/features/auth/authSlice'
import { useRouter } from 'next/router'

const initialState = 'Cerrar sesión'
export function useHook() {
	const [loading, setLoading] = useState(initialState)
	const [signout] = useSignoutMutation()
	const dispatch = useDispatch()
	const router = useRouter()
	const handleClick = async () => {
		setLoading('Cerrando sesión...')
		try {
			const response = await signout()
			const { data } = response
			if (!data.status === 200) throw { status: 401 }
			dispatch(logOut())
			dispatch(toggleDropdown())
		} catch (error) {
			setLoading(`Error: ${error.status || 'Desconocido'}`)
			setTimeout(() => {
				setLoading('...')
				router.push('/signin')
			}, 2000)
		} finally {
			setTimeout(() => setLoading(initialState), 2500)
		}
	}
	const myClass = `${styles.dropdown} transform_y`
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick, loading }
}
