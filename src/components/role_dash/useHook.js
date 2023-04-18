import styles from './styles.module.css'
import { useSelector } from 'react-redux'

export function useHook() {
	const myClass = styles.role_dash
	const { sections } = useSelector((state) => state)
	return { myClass }
}
