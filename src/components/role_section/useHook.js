import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSection } from '../../redux/features/section'
import { sectionByRole } from '../../utils/sectionByRole'

export function useHook() {
	const dashboard = useSelector((state) => state.sections.dashboard)
	const dispatch = useDispatch()
	const handleClick = (evt) => {
		const clicked = evt.currentTarget
		const child = clicked.parentElement.children[0]
		const section = parseInt(child.id)
		const operation = parseInt(clicked.id)
		dispatch(toggleSection({ section, operation }))
	}
	const myClass = styles.sections
	const sectionStyle = styles.section_active
	const material = 'material-symbols-outlined'
	return { myClass, material, sectionStyle, handleClick, dashboard }
}
