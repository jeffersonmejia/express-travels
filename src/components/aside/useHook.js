import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAside } from '../../redux/features/navbar/navbar'

export function useHook() {
	const dispatch = useDispatch()
	const { roleName } = useSelector((state) => state.user)
	const handleClick = () => {
		dispatch(toggleAside(false))
	}
	const myClass = styles.aside
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick, roleName }
}
