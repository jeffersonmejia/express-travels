import { useSelector, useDispatch } from 'react-redux'
import { useGetProfileQuery } from '../../redux/features/user/userAPI'
import { useEffect } from 'react'
import { setProfile } from '../../redux/features/user/userSlice'
import { toggleAside } from '../../redux/features/navbar/navbarSlice'

export function useHook() {
	const { isAside } = useSelector((state) => state.navbar)
	const profile = useGetProfileQuery().data
	const dispatch = useDispatch()
	useEffect(() => {
		if (profile) {
			const { customer_id, customer_name, role_id, role_name } = profile.api_response
			const currentProfile = {
				userId: customer_id,
				userFullName: customer_name,
				roleId: role_id,
				roleName: role_name,
			}
			dispatch(setProfile(currentProfile))
		}
		return () => {
			if (isAside) dispatch(toggleAside())
		}
	}, [profile, dispatch])
	return { isAside }
}
