import { useHook } from './useHook'
import { NavbarDropDown } from '../navbar_dropdown'
import React from 'react'
import { Aside } from '../aside'

function Navbar() {
	const { myClass, material, handleClick, userFullName, isDropDown, isAside } = useHook()

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
			{isDropDown && <NavbarDropDown />}
			{isAside && <Aside />}
		</nav>
	)
}

export default React.memo(Navbar)
