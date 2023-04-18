import { useHook } from './useHook'

export function RoleSection() {
	const { myClass, material, section, sectionStyle, handleClick } = useHook()
	return (
		<ul className={myClass}>
			{section &&
				section.operation.map((el, index) => {
					const flag = section.actionActive === index
					const active = flag ? sectionStyle : null
					return (
						<li key={index} data-value={index} className={active} onClick={handleClick}>
							<h5>{el}</h5>
						</li>
					)
				})}
		</ul>
	)
}
