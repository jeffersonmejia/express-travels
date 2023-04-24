import { useHook } from './useHook'
import { HirePersonal } from '../hire_personal'
import { HirePayment } from '../hire_payment'

export function HireEase() {
	const { myClass, handleSubmit, handleClick, flags, form, button, apiResponse } =
		useHook()
	return (
		<section className={myClass}>
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
							{apiResponse}
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
		</section>
	)
}
