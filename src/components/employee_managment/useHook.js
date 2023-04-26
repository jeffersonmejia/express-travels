import styles from './styles.module.css'
import { useGetEmployeesMutation } from '../../redux/features/employees/employeesAPI'
import { useEffect, useRef, useState } from 'react'

const toMiliseconds = 60000
const getCurrentDate = () => {
	const currentDate = new Date()
	const currentTime = currentDate.getTime()
	const currentTZ = currentDate.getTimezoneOffset()
	const diffTime = currentTime + currentTZ * toMiliseconds
	const adjustedDate = new Date(diffTime)
	const dateISO = adjustedDate.toISOString()
	const defaultDate = dateISO.slice(0, 10)
	return defaultDate
}

export function useHook() {
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])
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
		users,
		loading,
		defaultDate: getCurrentDate(),
	}
}
