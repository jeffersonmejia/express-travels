import { useHook } from './useHook'
import { HirePersonal } from '../hire_personal'

export function HireEase() {
	const { myClass, handleSubmit, error } = useHook()
	return (
		<section className={myClass}>
			<article>
				<form onSubmit={handleSubmit}>
					<HirePersonal error={error} />
					<fieldset className="group-btn">
						<input type="reset" value="Limpiar" />
						<button>Siguiente</button>
					</fieldset>
				</form>
			</article>
		</section>
	)
}
