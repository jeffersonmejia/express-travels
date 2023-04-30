import { useHook } from './useHook'
import { RoleSection } from '../role_section'

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
			<RoleSection />
			<div className="modal-1"></div>
		</aside>
	)
}
