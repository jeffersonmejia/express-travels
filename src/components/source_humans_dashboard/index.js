import { useHook } from './useHook.js'

export function SourceHumansDashboard() {
	const { myClass, employees, loading, error } = useHook()
	console.log(employees)
	return (
		<main className={myClass}>
			<h1>Resumen - Periodo 2023</h1>
			{loading && !employees ? (
				<small>Cargando...</small>
			) : (
				<section>
					<header>
						<h3>Empleados </h3>
					</header>
					{employees?.map((employee) => (
						<article key={employee.role_id}>
							<h5>{employee.role_name}</h5>
							<small>{employee.count}</small>
						</article>
					))}
				</section>
			)}
			{error && <small>Lo sentimos, ha ocurrido un error</small>}
			<section>
				<header>
					<h3>Ventas </h3>
				</header>
				<article>
					<h5>Encomienda</h5>
					<small>$1400.00</small>
				</article>
				<article>
					<h5>Pasaje</h5>
					<small>$14000.00</small>
				</article>
			</section>
		</main>
	)
}
