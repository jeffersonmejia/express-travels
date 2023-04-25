import { useHook } from './useHook'
import { EmployeeManagmentTable } from '../employee_managment_table/'

export function EmployeeManagment() {
	const { myClass, handleSubmit, users, error, loading } = useHook()
	return (
		<section className={myClass}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>
						<h1>Gestión de personal</h1>
						<h4>Consultas</h4>
					</legend>
					<fieldset>
						<label>Desde</label>
						<input type="date" name="since" />
					</fieldset>
					<fieldset>
						<label>hasta</label>
						<input type="date" name="until" />
					</fieldset>
					<fieldset>
						<button>{loading ? 'Consultando...' : 'Consultar'}</button>
					</fieldset>
				</fieldset>
				<small>{error}</small>
			</form>
			{users.length > 1 && <EmployeeManagmentTable users={users} />}
		</section>
	)
}
