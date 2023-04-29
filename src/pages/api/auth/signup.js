import { queryDB } from '../../../services/database'
import { genCredentials } from '../../../utils/credentialsHandler'

async function signup(employee) {
	let message
	employee = genCredentials(employee)
	try {
		//error: has 13 y it wants 14
		const query = {
			text: 'SELECT register_customer($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);',
			values: Object.values(employee),
		}
		const result = await queryDB(query)
		if (!result.rows) throw { success: false, message: result }
		message = result.rows[0].register_customer
		return { success: true, message }
	} catch (error) {
		console.log(`error - ${error}`)
		message = 'Error al registrar el empleado'
		return { success: false, message }
	}
}

export default async function handler(req, res) {
	let employee = req.body
	if (!employee)
		return res.status(404).json({
			success: false,
			message:
				'La petición no puede ser procesada. La información del empleado no se encuentra',
		})
	const result = await signup(employee)
	if (result.success) {
		return res.status(200).json({ success: result.success, message: result.message })
	} else {
		return res.status(500).json({ message: result.message })
	}
}
