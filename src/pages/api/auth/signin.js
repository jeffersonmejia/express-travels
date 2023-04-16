import { queryDB } from '../../../services/database'
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'

const DEFAULT_JSON = {
	status: 500,
	api_response: 'Servidor no disponible, intenta más tarde',
}

const USER_AUTHORIZED = { status: 200, api_response: '¡Acceso garantizado!' }

const HAS_SESSION = { status: 200, api_response: 'Ya tienes una sesión activa' }
const HAS_NOT_SESSION = { status: 401, api_response: 'No tienes una sesión activa' }

function verifyCredentials(data, method) {
	if (method !== 'POST') return { status: 404, api_response: 'Método no permtido' }
	const { username, password } = data
	if (username === undefined || password === undefined)
		return { status: 405, api_response: 'No se encontró el usuario y clave' }

	if (username.length === 0 || password.length === 0)
		return { status: 406, api_response: 'Usuario o contraseña vacía' }
}

async function authenticateUser({ username, password }) {
	const query = {
		text: 'select * from fetch_user_profile($1, $2);',
		values: [username, password],
	}
	const result = await queryDB(query)
	if (!result) return { status: 502, api_response: 'Servidor no disponible' }

	if (result.name === 'error')
		return { status: 500, api_response: 'Datos no disponibles' }

	if (!result.rowCount > 0)
		return { status: 404, api_response: 'Usuario o contraseña incorrecta' }
	return { status: 200, api_response: result.rows[0] }
}
//true -> has session, else not
function verifySession({ cookies }) {
	return cookies.auth !== undefined
}

function createJWT(userData) {
	const DAYS = 30,
		HOURS = 24,
		MINUTES = 60,
		SECS = 60,
		CURRENT_DATE = Math.floor(Date.now() / 1000)

	const exp = CURRENT_DATE + SECS * MINUTES * HOURS * DAYS
	const { customer_id, customer_name, role_id, role_name } = userData
	const tokenData = { exp, customer_id, customer_name, role_id, role_name }
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
	let json = DEFAULT_JSON,
		AUTH_TOKEN
	const { checkSession } = req.body
	if (checkSession) {
		const hasSession = verifySession(req)
		if (hasSession) {
			return res.status(200).json(HAS_SESSION)
		} else return res.status(401).json(HAS_NOT_SESSION)
	}
	try {
		const { method } = req
		const data = req.body
		const credentials = verifyCredentials(data, method)
		if (credentials && credentials.status >= 400) throw credentials
		const auth = await authenticateUser(data)
		if (auth.status >= 400) throw auth
		const user = auth.api_response

		AUTH_TOKEN = createJWT(user)
		res.setHeader('Set-Cookie', AUTH_TOKEN)
		json = USER_AUTHORIZED
	} catch (account_error) {
		console.log('error->', account_error)
		const { status, api_response } = account_error
		json = status || api_response ? account_error : json
	} finally {
		const { status } = json
		res.status(status).json(json)
	}
}
