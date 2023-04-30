import { queryDatabase } from '../../../services/database'
import { isAuthHandler } from '../../../utils/authHandler'

export default async function handler(req, res) {
	const isAuth = isAuthHandler(req.cookies, false)
	if (!isAuth.success) return res.status(401).json({ message: isAuth.message })

	const query = 'SELECT * FROM get_customer_roles();'
	const result = await queryDatabase(query, true)
	res.status(result.success ? 200 : 400).json(result)
}
