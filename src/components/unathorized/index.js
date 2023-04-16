import { useHook } from './useHook'
import Link from 'next/link'

export function Unathorized(props) {
	const { myClass, counter } = useHook(props)
	return (
		<main className={myClass}>
			<p>
				Acceso denegado, primero <Link href="/signin">inicia sesión</Link>
				<span>({counter})</span>
			</p>
		</main>
	)
}
