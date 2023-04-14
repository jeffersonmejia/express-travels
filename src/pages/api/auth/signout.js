import { verify } from 'jsonwebtoken'
import cookie from 'cookie'
const DEFAULT_JSON = { status: 503, statusText: 'Service unavaliable', response: null }

export default function handler(req, res) {
	const { auth } = req.cookies
	const json = DEFAULT_JSON

	if (!auth) {
		json.status = 404
		json.statusText = 'Not found'
	}
	try {
		const token = verify(auth, 'secret')
		const serialized = cookie.serialize('auth', null, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'strict',
			maxAge: 0,
			path: '/',
		})
		res.setHeader('Set-Cookie', serialized)
		json.status = 200
		json.statusText = 'ok'
	} catch (error) {
		json.response = error
	}

	return res.status(json.status).json(json)
}
