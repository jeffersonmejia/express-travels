import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSignupMutation } from '../../redux/features/auth/authAPI'
import { regexTest } from '../../utils/regex'
import { useGetEmployeeByDNIMutation } from '../../redux/features/employees/employeesAPI'

const INITIAL_FLAGS = {
	employee: false,
	payment: false,
	confirm: false,
	completed: false,
}

export function useHook() {
	const [form, setForm] = useState(null)
	const [flags, setFlags] = useState(INITIAL_FLAGS)
	const [button, setButton] = useState('Siguiente')
	const [apiResponse, setApiResponse] = useState(null)
	const [signup] = useSignupMutation()
	const [getEmployeeByDNI] = useGetEmployeeByDNIMutation()

	useEffect(() => {
		if (!form || form.error) return

		if (flags.payment && !flags.confirm) {
			setFlags((prev) => ({ ...prev, confirm: true }))
			return
		}
		if (flags.employee) {
			setFlags((prev) => ({ ...prev, payment: true }))
			return
		}
		setFlags((prev) => ({ ...prev, employee: true }))
	}, [form])

	useEffect(() => {
		if (flags.confirm && !flags.completed) {
			signupEmployee(form)
			return
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
		setButton('Guardando...')
		const response = await signup(employee)
		const { data } = response.error ? response.error : response
		setApiResponse(data.message)
		if (data?.success) {
			setFlags((prev) => ({ ...prev, completed: true }))
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const data = Array.from(event.target.elements)
		const employee = regexTest(data)
		const hasAnyError = employee.hasOwnProperty('error')
		if (employee.dni && !flags.payment) {
			const response = await getEmployeeByDNI(employee.dni)
			if (response?.data?.success) {
				const query = response.data.result[0]
				if (query.customer_dni) {
					setForm({ dni: { exists: true } })
				}
				return
			}
		}
		setForm((prev) => {
			if (flags.confirm) return prev
			if (!prev && !flags.employee) return employee
			if (!hasAnyError) delete prev.error
			if (flags.payment && !flags.confirm) {
				const role = Object.keys(prev.role)[0]
				const email_domain = Object.values(prev.email_domain)[0]
				const email = prev.email + email_domain
				const account_type = Object.values(prev.account_type)[0]
				const bank = Object.values(prev.bank)[0]

				const formUpdated = { ...prev, role, email, account_type, bank }
				delete formUpdated.email_domain
				return formUpdated
			}
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
