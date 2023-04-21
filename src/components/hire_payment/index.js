export function HirePayment({ form }) {
	return (
		<fieldset>
			<legend>
				<h1>Contratar personal</h1>
				<h4>Método de pago</h4>
			</legend>
			<fieldset>
				<input
					type="text"
					name="account_number"
					placeholder="Ingresa el número de cuenta"
					maxLength="16"
				/>
				<select name="account_type">
					<option value="0">Selecciona el tipo de cuenta</option>
					<option value="1">CTA Ahorros</option>
					<option value="2">CTA Corriente</option>
				</select>
				<label
					className={
						form.error?.account_number || form.error?.account_type ? 'error' : 'hidden'
					}
				>
					<span className="material-symbols-outlined">info</span>
					<small>
						{(form.error?.account_number && 'Número de CTA incorrecto') ||
							(form.error?.account_type && 'Selecciona el tipo de cuenta')}
					</small>
				</label>
			</fieldset>
		</fieldset>
	)
}
