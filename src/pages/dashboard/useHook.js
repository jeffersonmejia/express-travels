import { useSelector, useDispatch } from 'react-redux'
import { useGetProfileQuery } from '../../redux/features/user/userAPI'
import { useEffect } from 'react'
import { setProfile } from '../../redux/features/user/userSlice'
import { toggleAside } from '../../redux/features/navbar/navbarSlice'
import styles from './styles.module.css'
import { sectionByRole } from '../../utils/sectionByRole'
import { setAccess } from '../../redux/features/section'

export function useHook() {
	const { isAside } = useSelector((state) => state.navbar)
	const profile = useGetProfileQuery().data
	const dispatch = useDispatch()
	useEffect(() => {}, [])

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
		return () => {
			if (isAside) dispatch(toggleAside())
		}
	}, [profile, dispatch])
	const myClass = styles.main
	return { isAside, myClass }
}
