import { queryDB } from '../../../services/database'
import jwt from 'jsonwebtoken'

const DEFAULT_JSON = { status: 503, statusText: 'Service unavaliable', response: null }

async function fetchTravels(userId, roleId) {
	let result
	try {
		const query = {
			text: 'select * from travels_sales where officer_id = $1 and role_id= $2;',
			values: [userId, roleId],
		}
		result = await queryDB(query)
	} catch (error) {
		result = error
	} finally {
		return result
	}
}

export default async function handler(req, res) {
	const json = DEFAULT_JSON
	try {
		const { auth } = req.cookies

		if (!auth) {
			json.status = 401
			json.statusText = 'Not authorized'
		} else {
			const { customer_id, role_id } = jwt.verify(auth, 'secret')
			console.log(customer_id, role_id)
			json.response = await fetchTravels(customer_id, role_id)
			json.status = 200
			json.statusText = 'Ok'
		}
	} catch (error) {
		json.response = error
	} finally {
		return res.status(json.status).json(json)
	}
}
