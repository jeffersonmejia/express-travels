import { useHook } from './useHook'
import { NavbarDropDown } from '../navbar_dropdown'
import { useSelector } from 'react-redux'

export function Navbar() {
	const { myClass, material, handleClick, userFullName } = useHook()
	const dropdown = useSelector((state) => state.navbar)
	return (
		<nav className={myClass}>
			<span className={material}>
				<small onClick={handleClick}>menu</small>
			</span>
			<h3>express travels</h3>
			<ul>
				<li>
					<small>{userFullName}</small>
					<span className={material} onClick={handleClick}>
						account_circle
					</span>
				</li>
			</ul>
			{dropdown.isDropDown && <NavbarDropDown />}
		</nav>
	)
}
