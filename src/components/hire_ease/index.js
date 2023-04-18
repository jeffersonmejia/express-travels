export function HireEase() {
	return (
		<section>
			<header>Contratar personal</header>
			<article>
				<form>
					<fieldset>
						<legend>Datos personales</legend>
						<input type="text" name placeholder="Cédula de identidad" />
						<input type="text" name placeholder="nombres completo" />
						<input type="text" name placeholder="Apellidos completo" />
						<select>
							<option>Selecciona el rol</option>
							<option>--</option>
						</select>
					</fieldset>
					<fieldset>
						<legend>Método de pago</legend>
						<input type="text" placeholder="Número de cuenta" />
						<div>
							<label>Tipo de cuenta</label>
							<div>
								<label>Ahorros</label>
								<input type="radio" />
							</div>
							<div>
								<label>Corriente</label>
								<input type="radio" />
							</div>
						</div>
						<select>
							<option>Selecciona el banco</option>
							<option>Banco Guayaquil</option>
							<option>Banco Pichincha</option>
						</select>
					</fieldset>
					<fieldset>
						<label>Datos de contacto</label>
						<input type="text" placeholder="Teléfono celular" />
						<input type="email" placeholder="Correo electrónico" />
						<input type="text" placeholder="Calle 1" />
						<input type="text" placeholder="Calle 2" />
					</fieldset>
					<button>Siguiente</button>
				</form>
			</article>
		</section>
	)
}
