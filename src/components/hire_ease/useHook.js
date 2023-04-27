import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSignupMutation } from '../../redux/features/auth/authAPI'
import { regexTest } from '../../utils/regex'

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
	const [apiResponse, setApiResponse] = useState(null)
	const [tempState, setTemp] = useState(null)
	const [signup] = useSignupMutation()

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
		if (flags.completed) {
			setForm((prev) => {
				const updatedEmail = prev.email + prev.email_domain
				const updatedForm = { ...prev, email: updatedEmail }
				delete updatedForm.email_domain
				signupEmployee(updatedEmail)
				return updatedForm
			})
		} else if (flags.payment) {
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

	const signupEmployee = async () => {
		const response = await signup(form)
		const { data } = response.error ? response.error : response
		setApiResponse(data.message)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target.elements
		const formSet = Array.from(form)
		const validated = regexTest(formSet)
		setTemp(validated)

		formSet.forEach((set) => validateField(set))
	}

	const validateField = (set) => {
		const VALID_TAGS = ['INPUT', 'SELECT']
		const hasTags = VALID_TAGS.some((tag) => set.tagName === tag)
		if (!hasTags) return
		if (set.type !== 'reset' && set.tagName !== 'SELECT') updateInputState(set)
		if (set.tagName === 'SELECT') updateSelectState(set)
	}

	const updateInputState = (set) => {
		const isEmpty = set.value.length < 1
		//console.log(set.name, set.value)

		if (isEmpty) {
			setError((prev) => ({ ...prev, [set.name]: true }))
		} else {
			setError((prev) => ({ ...prev, [set.name]: false }))
			setForm((prev) => ({ ...prev, [set.name]: set.value }))
		}
	}

	const updateSelectState = (set) => {
		const isEmpty = set.value < 0
		if (isEmpty) {
			setError((prev) => ({ ...prev, [set.name]: true }))
		} else {
			setError((prev) => ({ ...prev, [set.name]: false }))
			setForm((prev) => ({
				...prev,
				[set.name]: set.name === 'role' ? set.value : set[set.selectedIndex].textContent,
			}))
		}
	}

	const handleClick = () => {
		setFlags(INITIAL_FLAGS)
		setForm(INITIAL_FORM)
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
		apiResponse,
		tempState,
	}
}
