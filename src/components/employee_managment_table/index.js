import { useHook } from './useHook'

export function EmployeeManagmentTable({ usersQuery }) {
	const { myClass, icon, handleClick, users, deleteUser } = useHook(usersQuery)
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
										<small data-edit="edit" onClick={handleClick} id={user.customer_id}>
											<p>editar</p>
											<span className={icon}>edit</span>
										</small>
										<small
											data-delete="delete"
											id={user.customer_id}
											onClick={handleClick}
										>
											<p>
												{deleteUser.id === user.customer_id ? 'Confirmar' : 'Eliminar'}
											</p>
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
