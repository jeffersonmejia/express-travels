import { useHook } from './useHook'
import { HirePersonal } from '../hire_personal'
import { HirePayment } from '../hire_payment'

export function HireEase() {
	const { myClass, handleSubmit, handleClick, flags, form, button, apiResponse } =
		useHook()
	return (
		<section className={myClass}>
			<form onSubmit={handleSubmit}>
				{!flags.employee && !flags.completed && <HirePersonal form={form} />}
				{flags.employee && !flags.completed && <HirePayment form={form} />}
				{flags.completed && (
					<fieldset>
						<p>
							<span>
								<b>{form?.name}</b>
								<br />
							</span>
							{apiResponse}
						</p>
					</fieldset>
				)}
				<fieldset className="group-btn">
					<input
						type="reset"
						value={!flags.employee ? 'Limpiar' : 'Volver'}
						onClick={handleClick}
					/>
					{!flags.completed && <button disabled={flags.confirm}>{button}</button>}
				</fieldset>
			</form>
		</section>
	)
}
