import { useHook } from './useHook'

export function HirePersonal({ form }) {
	const { isRoles, roles, icon } = useHook()
	return (
		<fieldset>
			<legend>
				<h1>Contratar personal</h1>
				<h4>Datos personales</h4>
			</legend>
			<fieldset>
				<input type="text" name="dni" placeholder="Cédula de identidad" maxLength="10" />
				<select name="role">
					<option value="-1">Selecciona un rol</option>
					{isRoles &&
						roles.map((role) => (
							<option value={role.role_range} key={role.role_range}>
								{role.role_name}
							</option>
						))}
				</select>
				{form?.error.dni && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.dni.isEmpty && 'La cédula no puede estar vacía'}
							{form?.error.dni.isInvalid && 'La cédula ingresada es inválida'}
						</small>
					</label>
				)}
				{!form?.error.dni && form?.error.role && (
					<label className="error">
						<span className={icon}>info</span>
						<small>{form?.error.role.isEmpty && 'Selecciona un rol válido'}</small>
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
				{form?.error.name && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.name.isEmpty && 'El nombre no puede estar vacío'}
							{form?.error.name.isInvalid && 'El nombre ingresado es inválido'}
						</small>
					</label>
				)}
				{!form?.error.name && form?.error.lastname && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.lastname.isEmpty && 'El apellido no puede estar vacío'}
							{form?.error.lastname.isInvalid && 'El apellido ingresado es inválido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="tel" name="tel" placeholder="Teléfono celular" maxLength="10" />
				{form?.error.tel && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.tel.isEmpty && 'El teléfono celular no puede estar vacío'}
							{form?.error.tel.isInvalid && 'El teléfono celular ingresado es inválido'}
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
				{form?.error.email && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.email.isEmpty && 'El correo electrónico no puede estar vacío'}
							{form?.error.email.isInvalid &&
								'El correo electrónico ingresado es inválido'}
						</small>
					</label>
				)}
				{!form?.error.email && form?.error.email_domain && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.email_domain.isEmpty &&
								'Selecciona un dominio de correo válido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<input type="text" name="address1" placeholder="Calle 1" />
				<input type="text" name="address2" placeholder="Calle 2" />

				{form?.error.address1 && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.address1?.isEmpty && 'La dirección 1 no puede estar vacía'}
							{form?.error.address1?.isInvalid && 'La dirección 1 es inválida'}
						</small>
					</label>
				)}
				{!form?.error.address1 && form?.error.address2 && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error.address2?.isEmpty && 'La dirección 2 no puede estar vacía'}
							{form?.error.address2?.isInvalid && 'La dirección 2 es inválida'}
						</small>
					</label>
				)}
			</fieldset>
		</fieldset>
	)
}
