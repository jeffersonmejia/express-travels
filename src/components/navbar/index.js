import { useHook } from './useHook'
import { NavbarDropDown } from '../navbar_dropdown'
import { useSelector } from 'react-redux'

export function Navbar() {
	const { myClass, material, handleClick } = useHook()
	const dropdown = useSelector((state) => state.navbar)
	return (
		<nav className={myClass}>
			<span class={material}>
				<small>menu</small>
			</span>
			<h3>express travels</h3>
			<ul>
				<li>
					<small>Jefferson Paul Mejia Chavez</small>
					<span class={material} onClick={handleClick}>
						account_circle
					</span>
				</li>
			</ul>
			{dropdown.isDropDown && <NavbarDropDown />}
		</nav>
	)
}
