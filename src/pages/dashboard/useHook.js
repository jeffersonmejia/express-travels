import { useSelector, useDispatch } from 'react-redux'
import { useGetProfileQuery } from '../../redux/features/user/userAPI'
import { useEffect } from 'react'
import { setProfile } from '../../redux/features/user/userSlice'
export function useHook() {
	const { isAside } = useSelector((state) => state.navbar)
	const { data, error, isError, isLoading } = useGetProfileQuery()
	const dispatch = useDispatch()
	useEffect(() => {
		if (data) {
			const { customer_id, customer_name, role_id, role_name } = data.api_response
			const profile = {
				userId: customer_id,
				userFullName: customer_name,
				roleId: role_id,
				roleName: role_name,
			}
			dispatch(setProfile(profile))
		}
	}, [data, dispatch])
	return { isAside }
}
