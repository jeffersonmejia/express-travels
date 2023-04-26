import jwt from 'jsonwebtoken'

export function authHandler(token) {
	const { auth } = token
	if (!auth)
		return {
			success: false,
			message: 'No tienes una sesión activa, inicia sesión primero.',
		}
	const user = jwt.verify(auth, 'secret')
	return { success: true, message: 'ok', result: user }
}

export function isAuthHandler(token, isCookieData = false) {
	const hasToken = token.auth
	if (!hasToken) return { success: false, message: 'error - No tienes una sesión activa' }
	if (!isCookieData) return { success: true, message: 'ok' }

	const user = jwt.verify(auth, 'secret')
	return { success: true, message: 'ok', result: user }
}
