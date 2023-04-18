import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSection } from '../../redux/features/section'

export function useHook() {
	const { sections } = useSelector((state) => state)
	const dispatch = useDispatch()

	const handleClick = (evt) => {
		const { value } = evt.currentTarget.dataset
		const actionActive = parseInt(value)
		dispatch(toggleSection(actionActive))
	}
	const myClass = styles.sections
	const sectionStyle = styles.section_active
	const material = 'material-symbols-outlined'
	return { myClass, material, sections, sectionStyle, handleClick }
}
