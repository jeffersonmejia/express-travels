export function regexTest(set) {
	let result = false
	for (field in set) {
		console.log('testing')
		const test = 1
		console.log(test)
		if (!test) {
			result = `Error: ${field} no válido`
			return result
		}
	}
	return result
}

export const regex = {
	name: /^[a-z]+(?:\s[a-z]+)+$/i,
}
