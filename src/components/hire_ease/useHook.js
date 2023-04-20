import { useState } from 'react'
import styles from './styles.module.css'
export function useHook() {
	const [error, setError] = useState(null)
	const [form, setForm] = useState(null)
	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target.elements
		const formSet = Array.from(form)
		formSet.forEach((set) => {
			if (set.tagName === 'INPUT') {
				if (set.value.length < 1) {
					setError((prev) => ({ ...prev, [set.name]: true }))
				} else {
					setError((prev) => ({ ...prev, [set.name]: false }))
					setForm((prev) => ({ ...prev, [set.name]: set.value }))
				}
			} else if (set.tagName === 'SELECT') {
				if (set.value < 1) {
					setError((prev) => ({ ...prev, [set.name]: true }))
				} else {
					setError((prev) => ({ ...prev, [set.name]: false }))
				}
			}
		})
	}
	const myClass = styles.hire
	return { myClass, handleSubmit, error }
}
