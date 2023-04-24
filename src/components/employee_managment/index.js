import { useHook } from './useHook'
import { EmployeeManagmentTable } from '../employee_managment_table/.templates'

export function EmployeeManagment() {
	const { myClass } = useHook()
	return (
		<section className={myClass}>
			<form>
				<fieldset>
					<legend>
						<h1>Gestión de personal</h1>
						<h4>Consultas</h4>
					</legend>
					<fieldset>
						<label>Desde</label>
						<input type="date" />
					</fieldset>
					<fieldset>
						<label>hasta</label>
						<input type="date" />
					</fieldset>
					<fieldset>
						<button>Consultar</button>
					</fieldset>
				</fieldset>
			</form>
			<EmployeeManagmentTable />
		</section>
	)
}
