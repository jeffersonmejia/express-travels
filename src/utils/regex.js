export function regexTest(set) {
	if (!Array.isArray(set)) {
		return new Error('Set must been an array')
	}
	if (set.length < 1) return new Error('Empty array set')

	let result = {}
	set.forEach((el) => {
		if (el.tagName === 'SELECT' && el.value < 0) {
			result = { ...result, [el.name]: { isEmpty: true } }
			return
		}
		if (el?.tagName === 'INPUT' && el?.type !== 'reset') {
			if (el.value.length < 1) {
				result = { ...result, [el.name]: { isEmpty: true } }
				return
			}
			if (!regex[el.name].test(el.value)) {
				result = { ...result, [el.name]: { isInvalid: true } }
			}
			return
		}
	})

	return result
}

export const regex = {
	dni: /^[0-9]{10}$/,
	name: /^[a-z]+(?:\s[a-z]+)+$/i,
	lastname: /^[a-z]+(?:\s[a-z]+)+$/i,
	tel: /^09[0-9]{8}$/,
	email: /^[a-z0-9._%+-]{8,16}$/i,
	address1: /^.{4,16}$/,
	address2: /^.{4,16}$/,
}
