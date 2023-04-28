import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSignupMutation } from '../../redux/features/auth/authAPI'
import { regexTest } from '../../utils/regex'

const INITIAL_FLAGS = {
	data: false,
	payment: false,
	completed: false,
}

export function useHook() {
	const [form, setForm] = useState(null)
	const [flags, setFlags] = useState(INITIAL_FLAGS)
	const [button, setButton] = useState('Siguiente')
	const [apiResponse, setApiResponse] = useState(null)
	const [signup] = useSignupMutation()

	useEffect(() => {
		if (!form) return
		const isCompleted = Object.keys(form).length < 1
		if (!isCompleted) return

		if (flags.payment) {
			setFlags((prev) => ({ ...prev, completed: true }))
		}
		if (flags.data) setFlags((prev) => ({ ...prev, payment: true }))
		setFlags((prev) => ({ ...prev, data: true }))
	}, [form])

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

	const signupEmployee = async (employee) => {
		const response = await signup(employee)
		console.log(response)
		const { data } = response.error ? response.error : response
		setApiResponse(data.message)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = Array.from(event.target.elements)
		const formValidated = regexTest(formData)
		console.log(formValidated)
		//setForm(formValidated)
	}

	const handleClick = () => {
		setFlags(INITIAL_FLAGS)
		setForm(null)
		setError(null)
	}

	const myClass = styles.hire
	return {
		myClass,
		handleSubmit,
		flags,
		handleClick,
		button,
		form,
		apiResponse,
	}
}
