import { authHandler } from '../../../utils/authHandler'
import { queryDatabase } from '../../../services/database'

const API_BY_METHOD = {
	['DELETE']: deleteEmployee,
	['POST']: getEmployees,
	['PUT']: updateEmployee,
}

async function deleteEmployee(req) {
	const { id } = req.query
	if (!id)
		return res.status(404).json({ message: 'Petición rechazada, no se encontró el id' })
	const query = { text: 'delete FROM customers where customer_id=$1;', values: [id] }
	return await queryDatabase(query)
}

async function getEmployeeByDNI(dni) {
	const query = {
		text: 'select customer_dni from customers where customer_dni=$1;',
		values: [dni],
	}
	const result = await queryDatabase(query, true)
	const { success } = result
	return { success, message: success ? 'El empleado ya existe' : 'El empleado no existe' }
}

async function getEmployees(req) {
	if (req.query?.dni) return await getEmployeeByDNI(req.query?.dni)

	const { since, until } = req.body
	if (!since || !until) {
		return { success: false, message: 'Petición rechaza, el rango de fecha es inválido' }
	}
	const query = { text: 'SELECT * FROM get_customers($1, $2);', values: [since, until] }
	return await queryDatabase(query)
}

async function updateEmployee(req) {
	const { id } = req.query
	if (!id) return { success: false, message: 'Petición rechazada, id inválido' }
	const { dni, roleId, name, lastname } = req.body
	const query = {
		text: 'update customers set customer_dni=$1, role_id=$2, customer_name=$3, customer_lastname=$4 where customer_id = $5;',
		values: [dni, roleId, name, lastname, id],
	}
	return await queryDatabase(query)
}

export default async function handler(req, res) {
	const isAuth = authHandler(req.cookies)
	if (!isAuth.success) return res.status(400).json(isUserAuth.result)
	const response = await API_BY_METHOD[req.method](req)
	return res.status(response.success ? 200 : 400).json(response)
}
