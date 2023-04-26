import styles from './styles.module.css'
import { useGetEmployeesMutation } from '../../redux/features/employees/employeesAPI'
import { useEffect, useRef, useState } from 'react'

const toMilliseconds = 60000

const getDates = () => {
	const currentDate = new Date()
	const currentTZ = currentDate.getTimezoneOffset()

	// end date with ISO format
	const currentDateISO = currentDate.toISOString()
	const currentDateFormatted = currentDateISO.slice(0, 10)

	//start date with ISO format
	const currentYear = currentDate.getFullYear()
	const currentMonth = currentDate.getMonth()
	const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
	const firstDayOfMonthTZ = firstDayOfMonth.getTimezoneOffset()
	const diffFirstDayOfMonth =
		firstDayOfMonth.getTime() +
		firstDayOfMonthTZ * toMilliseconds -
		currentTZ * toMilliseconds
	const firstDayOfMonthAdjusted = new Date(diffFirstDayOfMonth)
	const firstDayOfMonthISO = firstDayOfMonthAdjusted.toISOString()
	const firstDayOfMonthFormatted = firstDayOfMonthISO.slice(0, 10)

	return {
		start: firstDayOfMonthFormatted,
		end: currentDateFormatted,
	}
}

export function useHook() {
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [usersQuery, setUsers] = useState([])
	const [date, setDate] = useState(null)
	const [getEmployees] = useGetEmployeesMutation()
	const myClass = styles.section

	const handleSubmit = (event) => {
		event.preventDefault()
		let { elements } = event.target
		elements = Array.from(elements)

		elements.forEach((el) => {
			const tags = 'INPUT'
			if (el.tagName === tags) {
				if (el.value.length > 0) {
					setDate((prev) => ({
						...prev,
						[el.name]: el.value,
					}))
				}
			}
		})
	}
	const queryEmployees = async () => {
		setUsers([])
		setLoading(true)
		try {
			const response = await getEmployees(date)
			const { data, error } = response
			if (error) throw error
			setError(null)
			setTimeout(() => {
				setUsers(data.result)
				setLoading(false)
			}, 3000)
		} catch (fetchError) {
			setTimeout(() => {
				setError(fetchError?.data?.message || 'Error interno')
				setUsers([])
				setLoading(false)
			}, 3000)
			setTimeout(() => setError(null), 6000)
		}
	}
	useEffect(() => {
		if (date?.since && date?.until) queryEmployees()
	}, [date])
	return {
		myClass,
		handleSubmit,
		date,
		error,
		usersQuery,
		loading,
		defaultDate: getDates(),
	}
}
