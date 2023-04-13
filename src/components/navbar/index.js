import { useHook } from './useHook'

export function Navbar() {
	const { myClass, material } = useHook()
	return (
		<nav className={myClass}>
			<span class={material}>
				<small>menu</small>
			</span>
			<h3>express travels</h3>
			<ul>
				<li>
					<small>Jefferson Paul Mejia Chavez</small>
					<span class={material}>account_circle</span>
				</li>
			</ul>
		</nav>
	)
}
