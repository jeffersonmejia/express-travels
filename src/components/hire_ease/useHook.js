import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSignupMutation } from '../../redux/features/auth/authAPI'
import { regexTest } from '../../utils/regex'

const INITIAL_FLAGS = {
	employee: false,
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
		if (!form || form.error) return

		if (flags.payment) {
			setFlags((prev) => ({ ...prev, completed: true }))
			return
		}
		if (flags.employee) {
			setFlags((prev) => ({ ...prev, payment: true }))
			return
		}
		setFlags((prev) => ({ ...prev, employee: true }))
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
		} else if (flags.employee) {
			setButton('Guardar')
			return
		} else {
			setButton('Siguiente')
			return
		}
	}, [flags])

	const signupEmployee = async (employee) => {
		console.log('signup')
		/*	const response = await signup(employee)
		console.log(response)
		const { data } = response.error ? response.error : response
		setApiResponse(data.message)*/
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = Array.from(event.target.elements)
		const employee = regexTest(data)
		const hasAnyError = employee.hasOwnProperty('error')
		setForm((prev) => {
			if (!prev && !flags.employee) return employee
			if (!hasAnyError) delete prev.error
			return { ...prev, ...employee }
		})
	}

	const handleClick = () => {
		setFlags(INITIAL_FLAGS)
		setForm(null)
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
