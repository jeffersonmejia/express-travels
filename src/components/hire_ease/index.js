import { useHook } from './useHook'
import { HirePersonal } from '../hire_personal'
import { HirePayment } from '../hire_payment'

export function HireEase() {
	const { myClass, handleSubmit, handleClick, flags, form, button } = useHook()
	return (
		<section className={myClass}>
			<article>
				<form onSubmit={handleSubmit}>
					{!flags.data && !flags.completed && <HirePersonal form={form} />}
					{flags.data && !flags.completed && <HirePayment form={form} />}
					{flags.completed && (
						<fieldset>
							<p>
								<span>
									<b>{form.fieldset.name}</b>
									<br />
								</span>
								Ha sido contratado con éxito. El afiliado recibirá un correo con su
								usuario y contraseña.
							</p>
						</fieldset>
					)}
					<fieldset className="group-btn">
						<input
							type="reset"
							value={!flags.data ? 'Limpiar' : 'Volver'}
							onClick={handleClick}
						/>
						<button disabled={flags.completed}>{button}</button>
					</fieldset>
				</form>
			</article>
		</section>
	)
}
