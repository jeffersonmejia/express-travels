import { useHook } from './useHook'

export function NavbarDropDown() {
	const { myClass, material, handleClick, logout } = useHook()
	return (
		<ul className={myClass}>
			<li>
				<small>
					<span className={material}>logout</span>
				</small>
				<small onClick={handleClick}>{logout}</small>
			</li>
		</ul>
	)
}
