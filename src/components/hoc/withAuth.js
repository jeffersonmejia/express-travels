import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSigninMutation } from '../../redux/features/auth/signinSlice'
import { auth } from '../../redux/features/auth/authSlice'
import { Unathorized } from '../unathorized'

const TIME_WAITING = 10000
export function withAuth(WrappedComponent) {
	const Wrapper = (props) => {
		const router = useRouter()
		const dispatch = useDispatch()
		const [signin] = useSigninMutation()
		const session = useSelector((state) => state.auth)
		useEffect(() => {
			const hasSession = async () => {
				try {
					if (session.isAuth) return
					const response = await signin({ checkSession: true })
					const { error } = response
					if (error) throw error
					dispatch(auth(true))
				} catch (error) {
					setTimeout(() => router.push('/signin'), TIME_WAITING)
				}
			}
			hasSession()
		}, [session.isAuth])
		return session.isAuth ? (
			<WrappedComponent {...props} />
		) : (
			<Unathorized wait={TIME_WAITING} />
		)
	}

	return Wrapper
}
