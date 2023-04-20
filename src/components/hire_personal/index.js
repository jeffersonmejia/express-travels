import { useHook } from './useHook'

export function HirePersonal({ form }) {
	return (
		<fieldset>
			<legend>
				<h1>Contratar personal</h1>
			</legend>
			<fieldset>
				<input
					type="text"
					name="dni"
					placeholder="Cédula de identidad"
					maxLength="10"
					inputMode="numeric"
				/>
				<input type="text" name="name" placeholder="Nombres completos" maxLength="32" />
				<label className={form.error?.dni || form.error?.name ? 'error' : 'hidden'}>
					<span className="material-symbols-outlined">info</span>
					<small>
						{(form.error?.dni && 'Cédula incorrecta') ||
							(form.error?.name && 'Nombre incorrecto')}
					</small>
				</label>
			</fieldset>
			<fieldset>
				<input
					type="text"
					name="lastname"
					placeholder="Apellidos completos"
					maxLength="32"
				/>
				<input type="tel" name="tel" placeholder="Teléfono celular" maxLength="10" />
				<label className={form.error?.lastname || form.error?.tel ? 'error' : 'hidden'}>
					<span className="material-symbols-outlined">info</span>

					<small>
						{(form.error?.lastname && 'Apellido incorrecto') ||
							(form.error?.tel && 'Telefono incorrecto')}
					</small>
				</label>
			</fieldset>
			<fieldset>
				<input type="text" name="email" placeholder="Correo electrónico" maxLength="16" />
				<select name="email_domain">
					<option value="0">--</option>
					<option value="1">@gmail.com</option>
					<option value="2">@hotmail.com</option>
					<option value="3">@outlook.com</option>
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
		</fieldset>
	)
}
