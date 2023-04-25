import styles from './styles.module.css'

export function useHook() {
	const myClass = styles.query_result
	const icon = 'material-symbols-outlined'
	return { myClass, icon }
}
