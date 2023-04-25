import { isRejected } from '@reduxjs/toolkit'
import { useHook } from './useHook'

export function EmployeeManagmentTable({ users }) {
	const { myClass, icon } = useHook()
	return (
		<article className={myClass}>
			<table>
				<caption>Personal</caption>
				<thead>
					<tr>
						<th>Fecha de contrato</th>
						<th>Cédula</th>
						<th>Apellido</th>
						<th>Nombre</th>
						<th>Rol</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{users?.length > 0 &&
						users.map((user) => (
							<tr key={user.customer_id}>
								<td>{user.created_at}</td>
								<td>{user.customer_dni}</td>
								<td>{user.customer_lastname}</td>
								<td>{user.customer_lastname}</td>
								<td>{user.role_id}</td>
								<td className="table-actions">
									<div>
										<small>
											<p>Actualizar</p>
											<span className={icon}>edit</span>
										</small>
										<small>
											<p>Elimnar</p>
											<span className={icon}>delete</span>
										</small>
									</div>
								</td>
							</tr>
						))}
				</tbody>
				<tfoot>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td>{users.length} registros</td>
					</tr>
				</tfoot>
			</table>
		</article>
	)
}
