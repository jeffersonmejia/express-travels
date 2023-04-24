import { useGetRolesQuery } from '../../redux/features/roles/rolesAPI'

export function useHook() {
	const data = useGetRolesQuery().data
	return { isRoles: data?.success, roles: data?.result }
}
