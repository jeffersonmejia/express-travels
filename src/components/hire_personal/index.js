import { useHook } from './useHook'

export function HirePersonal({ form, tempState }) {
	const { isRoles, roles, icon } = useHook()

	console.log(tempState)
	return (
		<fieldset>
			<legend>
				<h1>Contratar personal</h1>
				<h4>Datos personales</h4>
			</legend>
			<fieldset>
				<input
					type="text"
					name="dni"
					placeholder="Cédula de identidad"
					maxLength="10"
					inputMode="numeric"
				/>
				<select name="role">
					<option value="-1">Selecciona un rol</option>
					{isRoles &&
						roles.map((role) => (
							<option value={role.role_range} key={role.role_range}>
								{role.role_name}
							</option>
						))}
				</select>

				{tempState?.dni && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.dni.isEmpty && 'La cédula no puede estar vacía'}
							{tempState.dni.isInvalid && 'La cédula ingresada es inválida'}
						</small>
					</label>
				)}
				{!tempState?.dni && tempState?.role && (
					<label className="error">
						<span className={icon}>info</span>
						<small>{tempState.role.isEmpty && 'Selecciona un rol válido'}</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="text" name="name" placeholder="Nombres completos" maxLength="32" />
				<input
					type="text"
					name="lastname"
					placeholder="Apellidos completos"
					maxLength="32"
				/>
				{tempState?.name && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.name.isEmpty && 'El nombre no puede estar vacío'}
							{tempState.name.isInvalid && 'El nombre ingresado es inválido'}
						</small>
					</label>
				)}
				{!tempState?.name && tempState?.lastname && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.lastname.isEmpty && 'El apellido no puede estar vacío'}
							{tempState.lastname.isInvalid && 'El apellido ingresado es inválido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="tel" name="tel" placeholder="Teléfono celular" maxLength="10" />
				{tempState?.tel && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.tel.isEmpty && 'El teléfono celular no puede estar vacío'}
							{tempState.tel.isInvalid && 'El teléfono celular ingresado es inválido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="text" name="email" placeholder="Correo electrónico" maxLength="16" />
				<select name="email_domain">
					<option value="-1">--</option>
					<option value="0">@gmail.com</option>
					<option value="1">@hotmail.com</option>
					<option value="2">@outlook.com</option>
				</select>
				{tempState?.email && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.email.isEmpty && 'El correo electrónico no puede estar vacío'}
							{tempState.email.isInvalid && 'El correo electrónico ingresado es inválido'}
						</small>
					</label>
				)}
				{!tempState?.email && tempState?.email_domain && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.email_domain.isEmpty && 'Selecciona un dominio de correo válido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="text" name="address1" placeholder="Calle 1" />
				<input type="text" name="address2" placeholder="Calle 2" />
				{tempState?.address1 && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.address1.isEmpty && 'La dirección 1 no puede estar vacía'}
							{tempState.address1.isInvalid && 'La dirección 1 es inválida'}
						</small>
					</label>
				)}
				{!tempState?.address1 && tempState?.address2 && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{tempState.address2.isEmpty && 'La dirección 2 no puede estar vacía'}
							{tempState.address2.isInvalid && 'La dirección 2 es inválida'}
						</small>
					</label>
				)}
			</fieldset>
		</fieldset>
	)
}
