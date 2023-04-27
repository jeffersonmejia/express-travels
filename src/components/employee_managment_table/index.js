import { useHook } from './useHook'

export function EmployeeManagmentTable({ usersQuery }) {
	const { myClass, icon, handleClick, users, deleteUser, updateUser } =
		useHook(usersQuery)
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
			{updateUser?.flag && (
				<div className="modal">
					<form>
						<fieldset>
							<legend>
								<h1>Actualización de datos</h1>
								<h4>personal</h4>
							</legend>
							<fieldset>
								<input
									type="text"
									placeholder="Cédula de identidad"
									value={updateUser.user.customer_dni}
								/>
								<select>
									<option>Selecciona el rol</option>
								</select>
							</fieldset>
							<fieldset>
								<input
									type="text"
									placeholder="Nombres completos"
									value={updateUser.user.customer_name}
								/>
								<input
									type="text"
									placeholder="Apellidos completos"
									value={updateUser.user.customer_lastname}
								/>
							</fieldset>
							<fieldset>
								<small>
									<p onClick={handleClick} data-modal-cancel>
										Cancelar
									</p>
								</small>
								<button onClick={handleClick} data-modal-save>
									Guardar
								</button>
							</fieldset>
						</fieldset>
					</form>
				</div>
			)}
		</article>
	)
}
