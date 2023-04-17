import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'

export function useHook() {
	const { roleOperations } = useSelector((state) => state.user)
	const [section, setSection] = useState(null)
	const { sections } = useSelector((state) => state)
	const { roleId } = useSelector((state) => state.user)

	useEffect(() => setSection(sections[roleId]), [])
	const myClass = styles.sections
	const sectionStyle = styles.section_active
	const material = 'material-symbols-outlined'
	return { myClass, roleOperations, material, section, sectionStyle }
}
