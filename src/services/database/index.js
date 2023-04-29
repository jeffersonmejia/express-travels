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

export async function queryDatabase(query, isRowRequired) {
	let client
	try {
		client = dbConnection()
		const db_response = await client.query(query)
		const { rows } = db_response

		if (isRowRequired && rows.length < 1) throw `Datos consultados: ${rows.length}`
		return { success: true, message: 'ok', result: rows }
	} catch (db_error) {
		console.log(db_error)
		return { success: false, message: `error - ${db_error}` }
	} finally {
		if (client) client.end()
	}
}
