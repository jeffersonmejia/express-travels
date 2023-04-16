import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSigninMutation } from '../../redux/features/auth/authAPI'
import { authorizeUser } from '../../redux/features/auth/authSlice'
import { Unathorized } from '../unathorized'

const TIME_WAITING = 10000
export function withAuth(WrappedComponent) {
	const Wrapper = (props) => {
		const router = useRouter()
		const dispatch = useDispatch()
		const [signin] = useSigninMutation()
		const { isLoggued } = useSelector((state) => state.auth)
		useEffect(() => {
			const hasSession = async () => {
				try {
					if (isLoggued) return
					const response = await signin({ checkSession: true })
					const { error } = response
					if (error) throw error
					dispatch(authorizeUser(true))
				} catch (error) {
					setTimeout(() => router.push('/signin'), TIME_WAITING)
				}
			}
			hasSession()
		}, [isLoggued])
		return isLoggued ? (
			<WrappedComponent {...props} />
		) : (
			<Unathorized wait={TIME_WAITING} />
		)
	}

	return Wrapper
}
