import { useHook } from './useHook'

export function HirePersonal({ error }) {
	const { isRoles, roles, icon } = useHook()
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

				{error?.dni && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.dni.isEmpty && 'La cédula no puede estar vacía'}
							{error.dni.isInvalid && 'La cédula ingresada es inválida'}
						</small>
					</label>
				)}
				{!error?.dni && error?.role && (
					<label className="error">
						<span className={icon}>info</span>
						<small>{error.role.isEmpty && 'Selecciona un rol válido'}</small>
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
				{error?.name && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.name.isEmpty && 'El nombre no puede estar vacío'}
							{error.name.isInvalid && 'El nombre ingresado es inválido'}
						</small>
					</label>
				)}
				{!error?.name && error?.lastname && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.lastname.isEmpty && 'El apellido no puede estar vacío'}
							{error.lastname.isInvalid && 'El apellido ingresado es inválido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="tel" name="tel" placeholder="Teléfono celular" maxLength="10" />
				{error?.tel && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.tel.isEmpty && 'El teléfono celular no puede estar vacío'}
							{error.tel.isInvalid && 'El teléfono celular ingresado es inválido'}
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
				{error?.email && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.email.isEmpty && 'El correo electrónico no puede estar vacío'}
							{error.email.isInvalid && 'El correo electrónico ingresado es inválido'}
						</small>
					</label>
				)}
				{!error?.email && error?.email_domain && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.email_domain.isEmpty && 'Selecciona un dominio de correo válido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="text" name="address1" placeholder="Calle 1" />
				<input type="text" name="address2" placeholder="Calle 2" />
				{error?.address1 && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.address1.isEmpty && 'La dirección 1 no puede estar vacía'}
							{error.address1.isInvalid && 'La dirección 1 es inválida'}
						</small>
					</label>
				)}
				{!error?.address1 && error?.address2 && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{error.address2.isEmpty && 'La dirección 2 no puede estar vacía'}
							{error.address2.isInvalid && 'La dirección 2 es inválida'}
						</small>
					</label>
				)}
			</fieldset>
		</fieldset>
	)
}
