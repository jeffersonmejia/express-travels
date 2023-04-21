import { queryDB } from '../../../services/database'

async function signup(employee) {
	let message
	try {
		const query = {
			text: 'SELECT register_customer($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);',
			values: Object.values(employee),
		}
		const result = await queryDB(query)
		if (!result.rows) throw { success: false, message: result.severity }
		message = result.rows[0].register_customer
		return { success: true, message }
	} catch (error) {
		console.log(error)
		message = 'Error al registrar el empleado'
		return { success: false, message }
	}
}

export default async function handler(req, res) {
	const employee = req.body
	const result = await signup(employee)
	if (result.success) {
		return res.status(200).json({ message: result.message })
	} else {
		return res.status(500).json({ message: result.message })
	}
}
