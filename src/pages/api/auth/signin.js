import { queryDB } from '../../../services/database'
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'

const DEFAULT_JSON = { status: 503, statusText: 'Service unavaliable', response: null }

function verifyCredentials(data, method) {
	const requestError = {}
	if (method !== 'POST') {
		requestError.status = 405
		requestError.statusText = 'Method not allowed'
	}
	const { customer_username, customer_password } = data
	if (customer_username === undefined || customer_password === undefined) {
		requestError.status = 406
		requestError.statusText = 'Username or password not found in the request'
	} else if (customer_username.length === 0 || customer_password.length === 0) {
		requestError.status = 406
		requestError.statusText = 'Inacceptable. Username or password must not be empty'
	}
	return requestError
}

async function authenticateUser({ customer_username, customer_password }) {
	let auth = {}
	const query = {
		text: 'select customer_id, role_id from customers where customer_username = $1 and customer_password = $2;',
		values: [customer_username, customer_password],
	}
	const result = await queryDB(query)
	if (!result) {
		auth.status = 502
		auth.statusText = 'Server unavailable'
	} else if (result.name === 'error') {
		auth.status = 500
		auth.statusText = 'Data unavailable'
		console.log('[DEBUG] error:', result.routine)
	} else if (!result.rowCount > 0) {
		auth.status = 404
		auth.statusText = 'The user it does not exists'
	} else auth = { ...auth, result }
	return auth
}

function authorizeUser({ customer_id }) {
	return { status: 200, statusText: 'ok', response: customer_id }
}

function createJWT(userData) {
	const DAYS = 30,
		HOURS = 24,
		MINUTES = 60,
		SECS = 60,
		CURRENT_DATE = Math.floor(Date.now() / 1000)

	const exp = CURRENT_DATE + SECS * MINUTES * HOURS * DAYS
	const { customer_id, role_id } = userData
	const tokenData = { exp, customer_id, role_id }
	const token = sign(tokenData, 'secret')

	const serialized = serialize('auth', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 1000 * 60 * 60 * 24 * 30,
		path: '/',
	})
	return serialized
}

export default async function handler(req, res) {
	let json = DEFAULT_JSON
	let AUTH_TOKEN
	try {
		const data = req.body,
			method = req.method,
			credentials = verifyCredentials(data, method)

		if (credentials.status >= 400) {
			throw credentials
		}
		const auth = await authenticateUser(data)
		if (auth.status >= 400) throw auth

		const userData = auth.result.rows[0]
		json = authorizeUser(userData)
		AUTH_TOKEN = createJWT(userData)
		res.setHeader('Set-Cookie', AUTH_TOKEN)
	} catch (account_error) {
		if (account_error.status || account_error.statusText) {
			json.status = account_error.status
			json.statusText = account_error.statusText
		}
	} finally {
		res.status(json.status).json(json)
	}
}
