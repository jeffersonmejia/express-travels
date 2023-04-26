import styles from './styles.module.css'
import { useDeleteEmployeeMutation } from '../../redux/features/employees/employeesAPI'
import { useEffect, useState } from 'react'

export function useHook(usersQuery) {
	const [users, setUsers] = useState([])
	const [deleteUser, setDelete] = useState({ flag: false, id: null })

	const [deleteEmployee] = useDeleteEmployeeMutation()

	const handleClick = (event) => {
		const { dataset, id } = event.currentTarget
		const parsedID = parseInt(id)
		if (dataset.edit) {
			console.log('edit')
		} else {
			if (deleteUser.flag && deleteUser.id === parsedID) {
				setUsers((prev) => {
					return prev.filter((el) => el.customer_id !== parsedID)
				})
				setDelete({ flag: false, id: null })
				return
			}
			setDelete({ flag: true, id: parsedID })
		}
	}
	useEffect(() => {
		console.log(users)
	}, [users])
	useEffect(() => {
		if (usersQuery) setUsers(usersQuery)
	}, [])

	const icon = 'material-symbols-outlined'
	const myClass = styles.query_result
	return { myClass, icon, handleClick, users, deleteUser }
}
