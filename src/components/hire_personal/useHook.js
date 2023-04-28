import { useGetRolesQuery } from '../../redux/features/roles/rolesAPI'

export function useHook() {
	const data = useGetRolesQuery().data
	const icon = 'material-symbols-outlined'
	const checkErrors = (el, field) => {
		return typeof el[field] !== 'string'
	}
	return { isRoles: data?.success, roles: data?.result, icon, checkErrors }
}
