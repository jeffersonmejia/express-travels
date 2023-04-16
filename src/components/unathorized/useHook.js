import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export function useHook({ wait }) {
	const myClass = styles.main
	const [counter, setCounter] = useState(wait / 1000)
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prev) => prev - 1)
		}, 1000)
		if (counter < 1) clearInterval(interval)
		return () => clearInterval(interval)
	}, [counter])
	return { myClass, counter }
}
