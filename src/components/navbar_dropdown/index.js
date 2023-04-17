import { useHook } from './useHook'

export function NavbarDropDown() {
	const { myClass, material, handleClick, loading } = useHook()
	return (
		<ul className={myClass}>
			<li onClick={handleClick}>
				<small>
					<span className={material}>logout</span>
				</small>
				<small>{loading}</small>
			</li>
		</ul>
	)
}
