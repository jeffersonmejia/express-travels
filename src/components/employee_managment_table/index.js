import { useHook } from './useHook'
export function EmployeeManagmentTable({ usersQuery }) {
	const { myClass, icon, handleClick, users, deleteUser, updateUser, roles, userId } =
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
							<tr
								key={user.customer_id}
								className={userId === user.customer_id ? 'danger-row' : ''}
							>
								<td>{user.created_at}</td>
								<td>{user.customer_dni}</td>
								<td>{user.customer_name}</td>
								<td>{user.customer_lastname}</td>
								<td>{user.role_id}</td>
								<td className="table-actions">
									<div>
										<small data-edit="edit" onClick={handleClick} id={user.customer_id}>
											<p>editar</p>
											<span className={icon}>edit</span>
										</small>
										{userId !== user.customer_id && (
											<small
												data-delete="delete"
												id={user.customer_id}
												onClick={handleClick}
											>
												<p>
													{deleteUser.id === user.customer_id &&
														deleteUser.isError &&
														'Error'}
													{deleteUser.id === user.customer_id && deleteUser.confirm
														? 'Confirmar'
														: 'Eliminar'}
												</p>

												<span className={icon}>delete</span>
											</small>
										)}
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
									defaultValue={updateUser.user.dni}
									disabled={updateUser.sending}
								/>
								<select
									defaultValue={updateUser.user.roleId}
									disabled={updateUser.sending}
								>
									<option value="-1">Selecciona el rol</option>
									{roles.length > 0 &&
										roles.map((role) => (
											<option value={role.role_range} key={role.role_range}>
												{role.role_name}
											</option>
										))}
								</select>
							</fieldset>
							<fieldset>
								<input
									type="text"
									placeholder="Nombres completos"
									defaultValue={updateUser.user.name}
									disabled={updateUser.sending}
								/>
								<input
									type="text"
									placeholder="Apellidos completos"
									defaultValue={updateUser.user.lastname}
									disabled={updateUser.sending}
								/>
							</fieldset>
							<fieldset>
								<small>
									<p onClick={handleClick} data-modal-cancel>
										{!updateUser.sending && 'Cancelar'}
									</p>

									{updateUser.ended && (
										<p>
											{updateUser.success
												? 'Empleado actualizado con éxito'
												: 'Error del servidor, actualización cancelada'}
										</p>
									)}
								</small>
								<button
									onClick={handleClick}
									data-modal-save
									disabled={updateUser.sending}
								>
									{!updateUser.confirm && 'Guardar'}
									{updateUser.confirm && !updateUser.sending && 'Confirmar'}
									{updateUser.sending && !updateUser.ended && 'Guardando...'}
									{updateUser.ended && 'Guardar'}
								</button>
							</fieldset>
						</fieldset>
					</form>
				</div>
			)}
		</article>
	)
}
