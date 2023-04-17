import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSigninMutation } from '../../redux/features/auth/authAPI'
import { authorizeUser } from '../../redux/features/auth/authSlice'
import { logOut } from '../../redux/features/auth/authSlice'
import { Unathorized } from '../unathorized'

const TIME_WAITING = 10000
export function withAuth(WrappedComponent) {
	const Wrapper = (props) => {
		const router = useRouter()
		const dispatch = useDispatch()
		const [signin] = useSigninMutation()
		const { isLoggued, hasLogOut } = useSelector((state) => state.auth)
		useEffect(() => {
			const hasSession = async () => {
				if (isLoggued) return
				if (hasLogOut) {
					router.push('/signin')
					return
				}
				try {
					const response = await signin({ checkSession: true })
					const { error } = response
					if (error) throw error
					dispatch(authorizeUser())
				} catch (error) {
					setTimeout(() => router.push('/signin'), TIME_WAITING)
					console.log('happening ', hasLogOut)
				}
			}
			hasSession()
		}, [isLoggued])

		if (isLoggued && !hasLogOut) {
			return <WrappedComponent {...props} />
		} else if (!isLoggued && !hasLogOut) {
			return <Unathorized wait={TIME_WAITING} />
		}
	}

	return Wrapper
}
