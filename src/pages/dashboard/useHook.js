import { useDispatch } from 'react-redux'
import { useGetProfileQuery } from '../../redux/features/user/userAPI'
import { useEffect } from 'react'
import { setProfile } from '../../redux/features/user/userSlice'
import styles from './styles.module.css'
import { sectionByRole } from '../../utils/sectionByRole'
import { setAccess } from '../../redux/features/section'

export function useHook() {
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
			dispatch(setAccess(sectionByRole[role_id]))
		}
	}, [profile, dispatch])
	const myClass = styles.main
	return { myClass }
}
