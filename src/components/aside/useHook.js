import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAside } from '../../redux/features/navbar/navbarSlice'

export function useHook() {
	const dispatch = useDispatch()
	const { roleName } = useSelector((state) => state.user)
	const handleClick = () => {
		dispatch(toggleAside(false))
	}
	const myClass = `${styles.aside} transform_x`
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick, roleName }
}
