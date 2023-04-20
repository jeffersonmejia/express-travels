import { useState } from 'react'
import styles from './styles.module.css'

const INITIAL_STATE = {
	dni: 'Cédula inválida',
	name: 'Nombre inválido',
	lastname: 'Apellido inválido',
	tel: 'Teléfono inválido',
	email: 'Correo electrónico inválido',
	email_domain: 'Selecciona un dominio de correo válido',
}
export function useHook() {
	const [errorHelper, setErrorHelper] = useState(INITIAL_STATE)
	return { errorHelper }
}
