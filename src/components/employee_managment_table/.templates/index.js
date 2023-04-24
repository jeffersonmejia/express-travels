import { useHook } from './useHook'

export function EmployeeManagmentTable() {
	const { myClass, icon } = useHook()
	return (
		<article className={myClass}>
			<table>
				<caption>Personal</caption>
				<thead>
					<tr>
						<th>Cédula</th>
						<th>Apellido</th>
						<th>Nombre</th>
						<th>Rol</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1317268876</td>
						<td>1317268876</td>
						<td>1317268876</td>
						<td>1317268876</td>
						<td className="table-actions">
							<div>
								<small>
									<span className={icon}>edit</span>
								</small>
								<small>
									<span className={icon}>delete</span>
								</small>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</article>
	)
}
