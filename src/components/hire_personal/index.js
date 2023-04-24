import { useHook } from './useHook'

export function HirePersonal({ form }) {
	const { isRoles, roles } = useHook()
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
				<label className={form.error?.dni || form.error?.role ? 'error' : 'hidden'}>
					<span className="material-symbols-outlined">info</span>
					<small>
						{(form.error?.dni && 'Cédula incorrecta') ||
							(form.error?.role && 'Selecciona un rol')}
					</small>
				</label>
			</fieldset>
			<fieldset>
				<input type="text" name="name" placeholder="Nombres completos" maxLength="32" />
				<input
					type="text"
					name="lastname"
					placeholder="Apellidos completos"
					maxLength="32"
				/>
				<label className={form.error?.name || form.error?.lastname ? 'error' : 'hidden'}>
					<span className="material-symbols-outlined">info</span>
					<small>
						{(form.error?.name && 'Nombre incorrecto') ||
							(form.error?.lastname && 'Apellido incorrecto')}
					</small>
				</label>
			</fieldset>
			<fieldset>
				<input type="tel" name="tel" placeholder="Teléfono celular" maxLength="10" />
				<label className={form.error?.tel ? 'error' : 'hidden'}>
					<span className="material-symbols-outlined">info</span>
					<small>{form.error?.tel && 'Telefono incorrecto'}</small>
				</label>
			</fieldset>
			<fieldset>
				<input type="text" name="email" placeholder="Correo electrónico" maxLength="16" />
				<select name="email_domain">
					<option value="-1">--</option>
					<option value="0">@gmail.com</option>
					<option value="1">@hotmail.com</option>
					<option value="2">@outlook.com</option>
				</select>
				<label
					className={form.error?.email || form.error?.email_domain ? 'error' : 'hidden'}
				>
					<span className="material-symbols-outlined">info</span>
					<small>
						{(form.error?.email && 'Correo incorrecto') ||
							(form.error?.email_domain && 'Selecciona un dominio de correo')}
					</small>
				</label>
			</fieldset>
			<fieldset>
				<input type="text" name="address1" placeholder="Calle 1" />
				<input type="text" name="address2" placeholder="Calle 2" />
				<label
					className={form.error?.address1 || form.error?.address2 ? 'error' : 'hidden'}
				>
					<span className="material-symbols-outlined">info</span>
					<small>
						{(form.error?.address1 && 'Calle 1 incorrecta') ||
							(form.error?.address2 && 'Calle 2 incorrecta')}
					</small>
				</label>
			</fieldset>
		</fieldset>
	)
}
