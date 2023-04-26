import { Pool } from 'pg'

export function dbConnection() {
	let conn
	const { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env
	if (!conn) {
		conn = new Pool({
			user: PG_USER,
			password: PG_PASSWORD,
			host: PG_HOST,
			port: PG_PORT,
			database: PG_DATABASE,
		})
	}
	return conn
}
