import styles from './styles.module.css'
import { useDeleteEmployeeMutation } from '../../redux/features/employees/employeesAPI'
import { useEffect, useState } from 'react'
import { useGetRolesQuery } from '../../redux/features/roles/rolesAPI'
import { useSelector } from 'react-redux'
import { useUpdateEmployeeMutation } from '../../redux/features/employees/employeesAPI'

export function useHook(usersQuery) {
	const [users, setUsers] = useState([])
	const [deleteUser, setDelete] = useState({ confirm: false, id: null, isError: false })
	const userId = useSelector((state) => state.user.userId)
	const [updateUser, setUpdate] = useState({
		flag: false,
		confirm: false,
		sending: false,
		completed: false,
	})
	const [deleteEmployee] = useDeleteEmployeeMutation()
	const [updateEmployee] = useUpdateEmployeeMutation()
	const roles = useGetRolesQuery().data

	const deleteById = async (id) => {
		if (deleteUser.confirm && deleteUser.id === id) {
			const response = await deleteEmployee(id)
			if (!response?.data?.success) return
			setUsers((prev) => {
				setDelete({ confirm: false, id: null })
				return prev.filter((el) => el.customer_id !== id)
			})
		}
		setDelete({ confirm: true, id })
	}

	const editById = (id) => {
		const filter = users.filter((user) => user.customer_id === id)[0]
		const { customer_dni, role_id, customer_name, customer_lastname, customer_id } =
			filter
		const copy = {
			id: customer_id,
			dni: customer_dni,
			roleId: role_id,
			name: customer_name,
			lastname: customer_lastname,
		}
		setUpdate({ flag: true, user: copy })
	}

	const updateById = async () => {
		if (!updateUser.confirm) return setUpdate((prev) => ({ ...prev, confirm: true }))

		setUpdate((prev) => ({ ...prev, sending: true }))
		const employee = updateUser.user
		const response = await updateEmployee(employee)
		const success = response.data?.success || false
		setTimeout(() => {
			setUpdate((prev) => ({ ...prev, ended: true, success }))
		}, 3000)
		setTimeout(() => {
			setUpdate((prev) => ({ ...prev, flag: false }))
		}, 6000)
	}

	const handleClick = async (event) => {
		const { dataset, id } = event.currentTarget
		const parsedID = parseInt(id)
		if (dataset.delete) return await deleteById(parsedID)
		else if (dataset.edit) return editById(parsedID)
		if (dataset.modalCancel) return setUpdate({ flag: false })
		if (dataset.modalSave) {
			event.preventDefault()
			await updateById()
			return
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
		roles: roles?.result || [],
		userId,
	}
}
