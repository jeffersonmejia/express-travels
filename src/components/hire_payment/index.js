import { useHook } from './useHook'

export function HirePayment({ form }) {
	const { icon } = useHook()
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
					maxLength="10"
				/>
				<select name="account_type">
					<option value="-1">Selecciona el tipo de cuenta</option>
					<option value="0">CTA Ahorros</option>
					<option value="1">CTA Corriente</option>
				</select>
				{form?.error?.account_number && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error?.account_number.isEmpty &&
								'El número de cuenta no puede estar vacío'}
							{form?.error?.account_number.isInvalid &&
								'El número de cuenta ingresado es inválida'}
						</small>
					</label>
				)}
				{!form?.error?.account_number && form?.error?.account_type && (
					<label className="error">
						<span className={icon}>info</span>
						<small>
							{form?.error?.account_type.isEmpty && 'Selecciona un tipo de cuenta válido'}
						</small>
					</label>
				)}
			</fieldset>
			<fieldset>
				<select name="bank">
					<option value="-1">Selecciona el banco</option>
					<option value="0">Banco Pichincha</option>
					<option value="1">Banco Guayaquil</option>
					<option value="2">Banco Bolivariano</option>
					<option value="3">Banco Solidario</option>
				</select>
				{form?.error?.bank && (
					<label className="error">
						<span className={icon}>info</span>
						<small>{form?.error?.bank.isEmpty && 'Selecciona un banco válido'}</small>
					</label>
				)}
			</fieldset>
		</fieldset>
	)
}
