import { useHook } from './useHook'
import { EmployeeManagmentTable } from '../employee_managment_table/'

export function EmployeeManagment() {
	const { myClass, handleSubmit, usersQuery, error, loading, defaultDate } = useHook()
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
						<input
							type="date"
							name="since"
							disabled={loading}
							defaultValue={defaultDate.start}
						/>
					</fieldset>
					<fieldset>
						<label>hasta</label>
						<input
							type="date"
							name="until"
							disabled={loading}
							defaultValue={defaultDate.end}
						/>
					</fieldset>
					<fieldset>
						<button disabled={loading}>{loading ? 'Consultando...' : 'Consultar'}</button>
					</fieldset>
				</fieldset>
				{error && <small className="error">{error}</small>}
			</form>
			{usersQuery.length > 0 && <EmployeeManagmentTable usersQuery={usersQuery} />}
		</section>
	)
}
