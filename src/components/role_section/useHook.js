import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSection } from '../../redux/features/section'

export function useHook() {
	const { roleOperations } = useSelector((state) => state.user)
	const [section, setSection] = useState(null)
	const { sections } = useSelector((state) => state)
	const { roleId } = useSelector((state) => state.user)

	const dispatch = useDispatch()
	useEffect(() => {
		setSection(sections[roleId])
	}, [sections])

	const handleClick = (evt) => {
		const { value } = evt.currentTarget.dataset
		const parsed = parseInt(value)
		dispatch(toggleSection({ roleId, actionActive: parsed }))
		setSection((prevSection) => ({ ...prevSection, actionActive: parsed }))
	}
	const myClass = styles.sections
	const sectionStyle = styles.section_active
	const material = 'material-symbols-outlined'
	return { myClass, roleOperations, material, section, sectionStyle, handleClick }
}
