import styles from './styles.module.css'
import { useDeleteEmployeeMutation } from '../../redux/features/employees/employeesAPI'
import { useEffect, useState } from 'react'
import { useGetRolesQuery } from '../../redux/features/roles/rolesAPI'

export function useHook(usersQuery) {
	const [users, setUsers] = useState([])
	const [deleteUser, setDelete] = useState({ flag: false, id: null })
	const [updateUser, setUpdate] = useState({
		flag: false,
		confirm: false,
		sending: false,
		completed: true,
	})
	const [deleteEmployee] = useDeleteEmployeeMutation()
	const roles = useGetRolesQuery().data

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
			if (!updateUser.confirm) {
				setUpdate((prev) => ({ ...prev, confirm: true }))
				return
			}
			if (!updateUser.sending) {
				setUpdate((prev) => ({ ...prev, sending: true }))
				setTimeout(() => {
					setUpdate((prev) => ({ ...prev, flag: false }))
				}, 5000)
				return
			}
			//setUpdate({ flag: false })
		}
	}

	useEffect(() => {
		if (usersQuery) setUsers(usersQuery)
	}, [])

	const icon = 'material-symbols-outlined'
	const myClass = styles.query_result
	return {
		myClass,
		icon,
		handleClick,
		users,
		deleteUser,
		updateUser,
		roles: roles.result || [],
	}
}
