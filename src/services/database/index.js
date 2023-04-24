import { dbConnection } from './db_connection'

export async function queryDB(query, rolePassword) {
	let db_response
	let client
	try {
		client = dbConnection(rolePassword)
		db_response = await client.query(query)
		if (db_response.routine !== undefined) {
			throw db_response.routine
		} else {
			const { rowCount, rows } = db_response
			db_response = { rowCount, rows }
		}
	} catch (db_error) {
		db_response = db_error
	} finally {
		if (client) client.end()
		return db_response
	}
}
