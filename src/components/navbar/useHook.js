import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { dropdown, toggleAside } from '../../redux/features/navbar/navbar'
import { useEffect } from 'react'

export function useHook() {
	const dispatch = useDispatch()
	const myDropDown = useSelector((state) => state.navbar)
	const { userFullName } = useSelector((state) => state.user)
	const handleClick = (event) => {
		const { textContent } = event.target
		if (textContent === 'menu') {
			dispatch(toggleAside(true))
			return
		}
		const { isDropDown } = myDropDown
		dispatch(dropdown(isDropDown ? false : true))
	}
	const myClass = styles.navbar
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick, userFullName }
}
