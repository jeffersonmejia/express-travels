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

async function deleteUser(id) {
	try {
		const query = {
			text: `delete FROM customers where customer_id=$1;`,
			values: [id],
		}
		const result = await queryDB(query)
		if (!result)
			throw {
				success: false,
				message: 'Lo sentimos, no se ha podido procesar la solicitud, intente más tarde.',
			}
		return { success: true, message: 'Borrado con éxito' }
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
	if (req.method === 'DELETE') {
		console.log()
		const { id } = req.query
		if (!id)
			return res.status(404).json({ message: 'Petición rechazada, no se encontró el id' })

		const result = await deleteUser(id)
		if (!result.success) {
			res.status(404).json({ message: result.message })
			return
		}
		return res.status(200).json(result)
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
	return res.status(404).json({ message: 'Método no permitido, petición rechazada' })
}
