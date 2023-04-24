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
