import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDropdown, toggleAside } from '../../redux/features/navbar/navbarSlice'
import { useEffect } from 'react'

export function useHook() {
	const dispatch = useDispatch()
	const isDropDown = useSelector((state) => state.navbar.isDropDown)
	const isAside = useSelector((state) => state.navbar.isAside)
	const { userFullName } = useSelector((state) => state.user)
	const handleClick = (event) => {
		const { textContent } = event.target
		if (textContent === 'menu') {
			dispatch(toggleAside())
			return
		}
		dispatch(toggleDropdown())
	}
	const myClass = styles.navbar
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick, userFullName, isAside, isDropDown }
}
