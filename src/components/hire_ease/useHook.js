import { useEffect, useState } from 'react'
import styles from './styles.module.css'

const INITIAL_FLAGS = {
	data: false,
	payment: false,
	completed: false,
}
const INITIAL_FORM = null
const INITIAL_ERROR = null
export function useHook() {
	const [error, setError] = useState(INITIAL_ERROR)
	const [form, setForm] = useState(INITIAL_FORM)
	const [flags, setFlags] = useState(INITIAL_FLAGS)
	const [button, setButton] = useState('Siguiente')

	useEffect(() => {
		if (!error) return
		const arrayError = Object.values({ ...error })
		const hasMistakes = arrayError.some((el) => el === true)
		if (hasMistakes) return
		if (flags.payment) {
			setFlags((prev) => ({ ...prev, completed: true }))
		}
		if (flags.data) setFlags((prev) => ({ ...prev, payment: true }))
		setFlags((prev) => ({ ...prev, data: true }))
	}, [error])

	useEffect(() => {
		if (flags.payment) {
			setButton('Confimar')
			return
		} else if (flags.data) {
			setButton('Guardar')
			return
		} else {
			setButton('Siguiente')
			return
		}
	}, [flags])

	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target.elements
		const formSet = Array.from(form)
		formSet.forEach((set) => validateField(set))
	}

	const validateField = (set) => {
		const VALID_TAGS = ['INPUT', 'SELECT']
		const hasTags = VALID_TAGS.some((tag) => set.tagName === tag)
		if (!hasTags) return
		if (set.type !== 'reset') updateInputState(set)
		if (set.tagName === 'SELECT') updateSelectState(set)
	}

	const updateInputState = (set) => {
		const isEmpty = set.value.length < 1
		if (isEmpty) {
			setError((prev) => ({ ...prev, [set.name]: true }))
		} else {
			setError((prev) => ({ ...prev, [set.name]: false }))
			setForm((prev) => ({ ...prev, [set.name]: set.value }))
		}
	}

	const updateSelectState = (set) => {
		const isEmpty = set.value < 1
		if (isEmpty) {
			setError((prev) => ({ ...prev, [set.name]: true }))
		} else {
			setError((prev) => ({ ...prev, [set.name]: false }))
			setForm((prev) => ({ ...prev, [set.name]: set[set.value].textContent }))
		}
	}

	const handleClick = () => {
		if (flags.completed) {
			setFlags(INITIAL_FLAGS)
			setForm(INITIAL_FORM)
			setError(INITIAL_ERROR)
			return
		}
		if (flags.data) {
			setFlags((prev) => ({ ...prev, data: false, payment: false }))
		}
		setError(INITIAL_ERROR)
	}

	const myClass = styles.hire
	return {
		myClass,
		handleSubmit,
		flags,
		handleClick,
		button,
		form: { fieldset: form, error },
	}
}
