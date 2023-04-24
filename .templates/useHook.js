import styles from './styles.module.css'

export function useHook() {
	const myClass = styles.main
	return { myClass }
}
