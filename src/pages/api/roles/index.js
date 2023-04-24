import { queryDB } from '../../../services/database'
import { authHandler } from '../../../utils/authHandler'

async function queryRoles() {
	try {
		const query = 'select role_range, role_name from roles;'
		const result = await queryDB(query)
		if (!result.rows)
			throw {
				success: false,
				message: 'Lo sentimos, no se ha podido procesar la solicitud, intente más tarde.',
			}
		return { success: true, message: 'ok', result: result.rows }
	} catch (error) {
		return error
	}
}

export default async function handler(req, res) {
	const isAuth = authHandler(req.cookies)
	if (!isAuth.success) {
		res.status(400).json(isUserAuth.result)
		return
	}
	const result = await queryRoles()
	if (!result.success) {
		res.status(404).json(result)
		return
	}
	return res.status(200).json(result)
}
