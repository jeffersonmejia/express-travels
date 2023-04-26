import { useHook } from './useHook'
import { EmployeeManagmentTable } from '../employee_managment_table/'

export function EmployeeManagment() {
	const { myClass, handleSubmit, users, error, loading, defaultDate } = useHook()

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
							defaultValue={defaultDate}
						/>
					</fieldset>
					<fieldset>
						<label>hasta</label>
						<input
							type="date"
							name="until"
							disabled={loading}
							defaultValue={defaultDate}
						/>
					</fieldset>
					<fieldset>
						<button disabled={loading}>{loading ? 'Consultando...' : 'Consultar'}</button>
					</fieldset>
				</fieldset>
				{error && <small className="error">{error}</small>}
			</form>
			{users.length > 1 && <EmployeeManagmentTable users={users} />}
		</section>
	)
}
