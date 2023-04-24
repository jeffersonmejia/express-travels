function genPassword(length = 10) {
	const charset =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='
	let password = ''

	for (let i = 0; i < length; i++) {
		password += charset[Math.floor(Math.random() * charset.length)]
	}

	return password
}

export function genCredentials(employee) {
	let { dni, name, lastname } = employee
	name = name.charAt(0)
	dni = dni.slice(-4)
	lastname = lastname.split(' ')[0]
	const username = (name + lastname + dni).toLowerCase()
	const password = genPassword()
	const EMPLOYEE_UPDATED = { ...employee, username, password }
	return EMPLOYEE_UPDATED
}
