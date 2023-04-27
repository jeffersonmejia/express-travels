import styles from './styles.module.css'
import { useDeleteEmployeeMutation } from '../../redux/features/employees/employeesAPI'
import { useEffect, useState } from 'react'

export function useHook(usersQuery) {
	const [users, setUsers] = useState([])
	const [deleteUser, setDelete] = useState({ flag: false, id: null })
	const [updateUser, setUpdate] = useState({ flag: false })

	const [deleteEmployee] = useDeleteEmployeeMutation()

	const handleClick = (event) => {
		const { dataset, id } = event.currentTarget
		const parsedID = parseInt(id)
		if (dataset.delete) {
			if (deleteUser.flag && deleteUser.id === parsedID) {
				setUsers((prev) => {
					return prev.filter((el) => el.customer_id !== parsedID)
				})
				setDelete({ flag: false, id: null })
				return
			}
			setDelete({ flag: true, id: parsedID })
			return
		} else if (dataset.edit) {
			const userCopy = users.filter((user) => user.customer_id === parsedID)
			setUpdate({ flag: true, user: userCopy[0] })
			return
		}
		if (dataset.modalCancel) {
			setUpdate({ flag: false })
			return
		}
		if (dataset.modalSave) {
			event.preventDefault()
			//setUpdate({ flag: false })
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
	return { myClass, icon, handleClick, users, deleteUser, updateUser }
}
