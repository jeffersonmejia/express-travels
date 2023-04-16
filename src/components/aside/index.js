import { useHook } from './useHook'

export function Aside() {
	const { myClass, material, handleClick, roleName } = useHook()
	return (
		<aside className={myClass}>
			<ul>
				<li>
					<h2>{roleName}</h2>
				</li>
				<li>
					<span className={material} onClick={handleClick}>
						cancel
					</span>
				</li>
			</ul>
			<hr />
			<h3>Role section</h3>
			<ul>
				<li>Role action</li>
			</ul>
		</aside>
	)
}
