import styles from './styles.module.css'

export function useHook() {
	const myClass = styles.navbar
	const material = 'material-symbols-outlined'
	return { myClass, material }
}
