import { useEffect } from 'react'
import { useSigninMutation } from '../redux/features/auth/authAPI'
import { useRouter } from 'next/router'

export function useHook() {
	const [signin] = useSigninMutation()
	const router = useRouter()

	useEffect(() => {
		const checkSession = async () => {
			const session = { checkSession: true }
			const response = await signin(session)
			if (response?.data?.status === 200) router.push('/dashboard')
		}
		checkSession()
	}, [])
	return {}
}
