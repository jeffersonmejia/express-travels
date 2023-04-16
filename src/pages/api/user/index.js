import jwt from 'jsonwebtoken'

const DEFAULT_JSON = {
	status: 500,
	api_response: 'Servidor no disponible, intenta más tarde',
}

export default function handler(req, res) {
	let json = DEFAULT_JSON
	try {
		const { auth } = req.cookies
		if (!auth) throw { status: 404, api_response: 'Acceso denegado' }
		const token = jwt.verify(auth, 'secret')
		const { customer_id, customer_name, normalize, role_id, role_name } = token
		json.api_response = { customer_id, customer_name, normalize, role_id, role_name }
		json.status = 200
	} catch (user_error) {
		json.response = user_error.api_response
	} finally {
		const { status } = json
		delete json.status
		return res.status(status).json(json)
	}
}
