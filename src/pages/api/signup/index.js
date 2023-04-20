import { regexTest } from '../../../utils/regex'

const PERSONAL_DATA = 0,
	PAYMENT = 1

function verifyData(data) {
	let ARRAY_VALIDATIONS = Object.keys(data)
	const isEmpty = ARRAY_VALIDATIONS.find((field) => field.length < 1)
	if (isEmpty) return [400, `${isEmpty} is empty`]
	const isValid = regexTest(data)

	return [200, 'ok']
}

function verifyPayment(data) {}

function register(flag, data) {
	const VALID_FLAG = flag !== undefined
	const VALID_DATA = data !== undefined
	if (!VALID_FLAG) return [400, 'Error: Bandera no encontrada']
	if (!VALID_DATA) return [400, 'Error: Formulario incompleto']

	const operations = {
		[PERSONAL_DATA]: verifyData,
		[PAYMENT]: verifyPayment,
	}
	const response = operations[flag](data)
	return response || [500, 'Error interno del servidor']
}

export default function handler(req, res) {
	let { flag, formData } = req.body
	flag = parseInt(flag)
	const [status, api_response] = register(flag, formData)

	res.status(status).json({ api_response })
}
