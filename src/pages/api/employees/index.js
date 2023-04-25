import { queryDB } from '../../../services/database'
import { authHandler } from '../../../utils/authHandler'

async function queryRoles(since, until) {
	try {
		const query = {
			text: `SELECT * FROM get_customers($1, $2);`,
			values: [since, until],
		}
		const result = await queryDB(query)
		if (!result?.rows || result?.rows < 1)
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
	if (req.method === 'POST') {
		const { since, until } = req.body
		if (!since || !until) {
			res.status(400).json({ message: 'Petición rechazada' })
			return
		}
		const result = await queryRoles(since, until)
		if (!result.success) {
			res.status(404).json(result)
			return
		}
		return res.status(200).json(result)
	}
	if (req.method === 'DELETE') {
		console.log(req.params)
	}
}
