import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export function withAuth(WrappedComponent) {
	const Wrapper = (props) => {
		const router = useRouter()
		const { auth } = useSelector((state) => state)
		useEffect(() => {
			if (!auth.isAuth) {
				router.push('/signin')
			}
		}, [router, auth])
		return <WrappedComponent {...props} />
	}
	return Wrapper
}
