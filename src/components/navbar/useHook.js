import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { dropdown } from '../../redux/features/navbar/navbar'
export function useHook() {
	const dispatch = useDispatch()
	const myDropDown = useSelector((state) => state.navbar)
	const handleClick = () => {
		const { isDropDown } = myDropDown
		dispatch(dropdown(isDropDown ? false : true))
	}
	const myClass = styles.navbar
	const material = 'material-symbols-outlined'
	return { myClass, material, handleClick }
}
