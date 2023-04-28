const INVALID_FIELD = {
	['INPUT']: 1,
	['SELECT']: 0,
}

export function regexTest(set) {
	if (!Array.isArray(set)) {
		return new Error('Set must been an array')
	}
	if (set.length < 1) return new Error('Empty array set')

	let result = {}
	const filtered = set.filter((el) => {
		if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
			if (el.type !== 'reset') return el
		}
	})
	filtered.forEach((el) => {
		const field = isEmptyField(el)
		if (field.isEmpty) {
			result = {
				...result,
				error: { ...result.error, [el.name]: field },
			}
			return
		}
		if (el.tagName !== 'SELECT') {
			const input = isInvalidField(el)
			if (input.isInvalid) {
				result = {
					...result,
					error: { ...result.error, [el.name]: input },
				}
				return
			}
		}
		result = { ...result, [el.name]: field }
	})
	return result
}

function isEmptyField(el) {
	const isSelect = el.tagName === 'SELECT'
	const length = isSelect ? el.value : el.value.length
	const isEmpty = length < INVALID_FIELD[el.tagName]
	if (isEmpty) return { isEmpty: true }
	return isSelect ? { [el.selectedIndex]: el[el.selectedIndex].textContent } : el.value
}

function isInvalidField(el) {
	const { name, value } = el
	const isValidated = regex[name].test(value)
	if (isValidated) return value
	return { isInvalid: true }
}

export const regex = {
	dni: /^[0-9]{10}$/,
	name: /^[a-z]+(?:\s[a-z]+)+$/i,
	lastname: /^[a-z]+(?:\s[a-z]+)+$/i,
	tel: /^09[0-9]{8}$/,
	email: /^[a-z0-9._%+-]{8,16}$/i,
	address1: /^.{4,16}$/,
	address2: /^.{4,16}$/,
	account_number: /^[0-9]{10}$/,
}
