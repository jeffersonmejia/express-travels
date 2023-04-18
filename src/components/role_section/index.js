import { useHook } from './useHook'

export function RoleSection() {
	const { myClass, material, sections, sectionStyle, handleClick } = useHook()
	return (
		<ul className={myClass}>
			{sections &&
				sections.operation.map((el, index) => {
					const flag = sections.actionActive === index
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
