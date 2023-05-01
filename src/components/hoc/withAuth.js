import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSigninMutation } from '../../redux/features/auth/authAPI'
import { authorizeUser } from '../../redux/features/auth/authSlice'

export function withAuth(WrappedComponent) {
	const Wrapper = (props) => {
		const router = useRouter()
		const dispatch = useDispatch()
		const [signin] = useSigninMutation()
		const isLoggued = useSelector((state) => state.auth.isLoggued)
		const hasLogOut = useSelector((state) => state.auth.hasLogOut)

		useEffect(() => {
			const hasSession = async () => {
				if (hasLogOut) return router.push('/signin')
				const session = { checkSession: true }
				const response = await signin(session)
				const error = response.error
				if (error) return router.push('/signin')
				dispatch(authorizeUser())
			}
			hasSession()
		}, [isLoggued, dispatch, hasLogOut, router, signin])

		if (!isLoggued) return
		if (isLoggued && !hasLogOut) return <WrappedComponent {...props} />
	}

	return Wrapper
}
