import { useHook } from './useHook'

export function RoleSection() {
	const { myClass, handleClick, dashboard } = useHook()
	if (!dashboard) return
	return (
		<ul className={myClass}>
			{dashboard.sections.map((section, index) => {
				return (
					<>
						<li key={index}>
							<p id={index}>{section.title}</p>
							{section.operations.map((operation, idx) => {
								return (
									<small key={idx} id={idx} onClick={handleClick}>
										{operation}
									</small>
								)
							})}
						</li>
						<hr />
					</>
				)
			})}
		</ul>
	)
}
