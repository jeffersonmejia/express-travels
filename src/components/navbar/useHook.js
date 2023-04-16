import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDropdown, toggleAside } from '../../redux/features/navbar/navbarSlice'

export function useHook() {
	const dispatch = useDispatch()
	const { isDropDown } = useSelector((state) => state.navbar)
	const { userFullName } = useSelector((state) => state.user)
	const handleClick = (event) => {
		const { textContent } = event.target
		if (textContent === 'menu') {
			dispatch(toggleAside(true))
			return
		}
		dispatch(toggleDropdown(isDropDown ? false : true))
	}
	const myClass = styles.navbar
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick, userFullName }
}
